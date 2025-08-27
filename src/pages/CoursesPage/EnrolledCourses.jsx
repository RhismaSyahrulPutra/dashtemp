import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";
import PageWrapper from "../../components/UiComponents/PageWrapper";
import Header from "../../components/UiComponents/Header";
import Card, {
  CardBody,
  CardHeader,
  CardFooter,
} from "../../components/UiComponents/Card";
import Button from "../../components/UiComponents/Button";

function EnrolledCourses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      if (!userId) return setLoading(false);

      try {
        const { data, error } = await supabase
          .from("enrollment")
          .select(
            `
            course:course_id (
              course_id,
              course_title,
              course_desc,
              course_photo
            )
          `
          )
          .eq("user_id", userId);

        if (error) throw error;

        const enrolledCourses = data.map((item) => item.course);
        setCourses(enrolledCourses);
      } catch (err) {
        console.error("Error fetching enrolled courses:", err.message || err);
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolledCourses();
  }, [userId]);

  const getPublicUrl = (path) => {
    if (!path) return null;
    const { data } = supabase.storage.from("media").getPublicUrl(path);
    return data.publicUrl;
  };

  const handleStartLearning = (courseId) => {
    // Navigasi ke halaman /learning sambil bawa course_id
    navigate("/learning", { state: { courseId } });
  };

  return (
    <PageWrapper>
      <Header>Enrolled Courses</Header>

      {loading ? (
        <p>Loading...</p>
      ) : courses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
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
                <h3 className="font-semibold text-lg mb-1">
                  {course.course_title}
                </h3>
                <p className="text-sm text-gray-700">{course.course_desc}</p>
              </CardBody>

              <CardFooter>
                <Button
                  variant="primary"
                  block
                  onClick={() => handleStartLearning(course.course_id)}
                >
                  Start Learning
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </PageWrapper>
  );
}

export default EnrolledCourses;
