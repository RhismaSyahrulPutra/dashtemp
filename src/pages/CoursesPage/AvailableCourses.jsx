import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, {
  CardBody,
  CardHeader,
  CardFooter,
} from "../../components/UiComponents/Card";
import Button from "../../components/UiComponents/Button";

function AvailableCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(null); // track course yang sedang diproses

  // ambil userId dari localStorage
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCourses = async () => {
      if (!userId) return setLoading(false);

      try {
        // 1. ambil course_id yang sudah di-enroll user
        const { data: enrolled, error: err1 } = await supabase
          .from("enrollment")
          .select("course_id")
          .eq("user_id", userId);

        if (err1) throw err1;

        const enrolledIds = enrolled.map((e) => e.course_id);

        // 2. ambil semua course
        const { data: allCourses, error: err2 } = await supabase
          .from("course")
          .select("*");
        if (err2) throw err2;

        // 3. filter course yang belum di-enroll
        const available = allCourses.filter(
          (c) => !enrolledIds.includes(c.course_id)
        );
        setCourses(available);
      } catch (error) {
        console.error("Error fetching courses:", error.message || error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, [userId]);

  const handleEnroll = async (courseId) => {
    if (!userId) {
      alert("Anda harus login terlebih dahulu!");
      return;
    }

    setEnrolling(courseId);

    const { error } = await supabase
      .from("enrollment")
      .insert([{ user_id: userId, course_id: courseId }])
      .select();

    setEnrolling(null);

    if (error) {
      console.error("Supabase enrollment error:", error);
      if (error.code === "23505") {
        alert("Anda sudah terdaftar di kursus ini.");
      } else {
        alert("Gagal enroll: " + error.message);
      }
      return;
    }

    // Update courses setelah enroll: hapus course yang baru saja di-enroll
    setCourses((prev) => prev.filter((c) => c.course_id !== courseId));

    alert("Enroll berhasil!");
  };

  const getPublicUrl = (path) => {
    if (!path) return null;
    const { data } = supabase.storage.from("media").getPublicUrl(path);
    return data.publicUrl;
  };

  return (
    <PageWrapper>
      <Header>Available Courses</Header>

      {loading ? (
        <p>Loading...</p>
      ) : courses.length === 0 ? (
        <p>No courses available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => (
            <Card key={course.course_id}>
              <CardHeader>
                {course.course_photo ? (
                  <img
                    src={getPublicUrl(course.course_photo)}
                    alt={course.course_title}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-300 flex items-center justify-center rounded-t-lg">
                    <span className="text-gray-600">No Image</span>
                  </div>
                )}
              </CardHeader>

              <CardBody>
                <h3 className="font-semibold text-md mb-1">
                  {course.course_title}
                </h3>
                <p className="text-xs text-gray-500">{course.course_desc}</p>
              </CardBody>

              <CardFooter>
                <Button
                  variant="primary"
                  block
                  disabled={enrolling === course.course_id}
                  onClick={() => handleEnroll(course.course_id)}
                >
                  {enrolling === course.course_id ? "Enrolling..." : "Enroll"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}

export default AvailableCourses;
