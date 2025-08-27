import { useState, useEffect } from "react";
import bcrypt from "bcryptjs";
import Card, { CardHeader, CardBody } from "../UiComponents/Card";
import InputLabel from "../FormComponents/InputLabel";
import Button from "../UiComponents/Button";
import { supabase } from "../../lib/supabaseClient";
import Loading from "../UiComponents/Loading";
import { toast } from "react-hot-toast";

function AccountInformation() {
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const getUserId = () =>
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = getUserId();
      if (!userId) return;

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from("users")
          .select("email, username")
          .eq("user_id", userId)
          .single();

        if (error || !data) throw new Error("User tidak ditemukan");

        setFormData({ email: data.email, password: "", confirmPassword: "" });
      } catch (err) {
        console.error("Error fetching user data:", err.message);
        toast.error("Gagal mengambil data user");
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    const userId = getUserId();
    if (!userId) {
      toast.error("User tidak ditemukan");
      return;
    }

    const updates = {};

    if (formData.email) updates.email = formData.email;

    if (formData.password) {
      if (formData.password !== formData.confirmPassword) {
        toast.error("Password dan Confirm Password harus sama");
        return;
      }
      updates.password = bcrypt.hashSync(formData.password, 10);
    }

    if (Object.keys(updates).length === 0) {
      toast("Tidak ada perubahan yang akan disimpan");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase
        .from("users")
        .update(updates)
        .eq("user_id", userId);
      if (error) throw error;

      toast.success("Data berhasil diperbarui");

      const { data } = await supabase
        .from("users")
        .select("email, username")
        .eq("user_id", userId)
        .single();

      setFormData({ email: data.email, password: "", confirmPassword: "" });
      setIsEditing(false);
    } catch (err) {
      console.error(err);
      toast.error("Gagal update: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <h4 className="font-semibold text-primary">Account Information</h4>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        {loading ? (
          <div className="flex items-center justify-center py-10">
            <Loading type="spinner" size="md" variant="primary" />
          </div>
        ) : !isEditing ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <InputLabel
                  type="text"
                  value={formData.email}
                  disabled
                  size="md"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-600">
                  Password
                </span>
                <InputLabel
                  type="password"
                  value="********"
                  disabled
                  size="md"
                  className="w-full"
                />
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <Button onClick={() => setIsEditing(true)}>Edit</Button>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-600">Email</span>
                <InputLabel
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  size="md"
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-600">
                  Password
                </span>
                <InputLabel
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  size="md"
                  className="w-full"
                  placeholder="Kosongkan jika tidak ingin diupdate"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-gray-600">
                  Confirm Password
                </span>
                <InputLabel
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  size="md"
                  className="w-full"
                  placeholder="Kosongkan jika tidak ingin update"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-4">
              <Button onClick={handleUpdate}>Update</Button>
              <Button variant="outline" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          </>
        )}
      </CardBody>
    </Card>
  );
}

export default AccountInformation;
