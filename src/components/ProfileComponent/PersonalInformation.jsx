import { useState, useEffect } from "react";
import Card, { CardHeader, CardBody } from "../UiComponents/Card";
import InputLabel from "../FormComponents/InputLabel";
import Textarea from "../FormComponents/Textarea";
import Select from "../FormComponents/Select";
import FileInput from "../FormComponents/FileInput";
import Button from "../UiComponents/Button";
import { Avatar } from "../UiComponents/Avatar";
import { supabase } from "../../lib/supabaseClient";
import Loading from "../UiComponents/Loading";

function PersonalInformation() {
  const [formData, setFormData] = useState({
    full_name: "",
    bio: "",
    birth_date: "",
    gender: "male",
    phone: "",
    profile_photo: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [previewPhoto, setPreviewPhoto] = useState("");
  const [loading, setLoading] = useState(false);

  const getUserId = () =>
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchProfile = async () => {
      const userId = getUserId();
      if (!userId) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("user_id", userId)
          .single();
        if (error && error.code !== "PGRST116") throw error;

        if (data) {
          setFormData({
            full_name: data.full_name || "",
            bio: data.bio || "",
            birth_date: data.birth_date || "",
            gender: data.gender || "other",
            phone: data.phone || "",
            profile_photo: data.profile_photo || "",
          });
          setPreviewPhoto(data.profile_photo || "");
        }
      } catch (err) {
        console.error(err.message);
        alert("Gagal mengambil data profil");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const userId = getUserId();
    if (!userId) return;

    setLoading(true);
    try {
      const fileExt = file.name.split(".").pop();
      const fileName = `${userId}.${fileExt}`;
      const filePath = `media/profile/${fileName}`;

      // Upload ke bucket public 'media'
      const { error } = await supabase.storage
        .from("media")
        .upload(filePath, file, { upsert: true });
      if (error) throw error;

      // Ambil public URL
      const { data: publicData } = supabase.storage
        .from("media")
        .getPublicUrl(filePath);

      // Simpan URL ke database
      const { error: dbError } = await supabase
        .from("profiles")
        .upsert(
          { user_id: userId, profile_photo: publicData.publicUrl },
          { onConflict: "user_id" }
        );
      if (dbError) throw dbError;

      setFormData((prev) => ({ ...prev, profile_photo: publicData.publicUrl }));
      setPreviewPhoto(publicData.publicUrl);
      alert("Upload berhasil!");
    } catch (err) {
      console.error("Upload gagal:", err);
      alert("Upload gagal: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    const userId = getUserId();
    if (!userId) return alert("User tidak ditemukan");

    const validGenders = ["male", "female", "other"];
    const gender = validGenders.includes(formData.gender)
      ? formData.gender
      : "other";

    setLoading(true);
    try {
      const { error } = await supabase
        .from("profiles")
        .upsert(
          { user_id: userId, ...formData, gender },
          { onConflict: "user_id" }
        );
      if (error) throw error;

      alert("Data berhasil diperbarui");
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      alert("Gagal update: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h4 className="font-semibold text-primary">Personal Information</h4>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        {loading ? (
          <div className="flex justify-center py-10">
            <Loading type="spinner" size="md" variant="primary" />
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center mb-4">
              {previewPhoto ? (
                <Avatar
                  src={previewPhoto}
                  size="xl"
                  shape="rounded-full"
                  ring="primary"
                />
              ) : (
                <Avatar
                  placeholder
                  placeholderText="No Photo"
                  size="xl"
                  shape="rounded-full"
                  ring="primary"
                />
              )}
              {isEditing && (
                <FileInput
                  color="primary"
                  size="md"
                  onChange={handleFileChange}
                  className="mt-4"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Full Name
                </span>
                <InputLabel
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">Phone</span>
                <InputLabel
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Birth Date
                </span>
                <InputLabel
                  type="date"
                  name="birth_date"
                  value={formData.birth_date}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full"
                />
              </div>
              <div>
                <span className="text-sm font-medium text-gray-600">
                  Gender
                </span>
                <Select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                  options={[
                    { value: "male", label: "Male" },
                    { value: "female", label: "Female" },
                    { value: "other", label: "Other" },
                  ]}
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <span className="text-sm font-medium text-gray-600">Bio</span>
              <Textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows={4}
                className="w-full"
              />
            </div>

            <div className="flex gap-3 mt-4">
              {isEditing ? (
                <>
                  <Button onClick={handleUpdate}>Update</Button>
                  <Button variant="outline" onClick={() => setIsEditing(false)}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button onClick={() => setIsEditing(true)}>Edit</Button>
              )}
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}

export default PersonalInformation;
