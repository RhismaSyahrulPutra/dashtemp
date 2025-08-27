import { useEffect, useState } from "react";
import Card, { CardBody } from "../UiComponents/Card";
import {
  BookOpenIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import { supabase } from "../../lib/supabaseClient";
import Loading from "../UiComponents/Loading";

export default function DashboardHeader() {
  const [courseCount, setCourseCount] = useState(0);
  const [enrolledCount, setEnrolledCount] = useState(0);
  const [accountAge, setAccountAge] = useState(0);
  const [loading, setLoading] = useState(true);

  const getUserId = () =>
    localStorage.getItem("userId") || sessionStorage.getItem("userId");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { count: courseTotal, error: courseError } = await supabase
          .from("course")
          .select("*", { count: "exact", head: true });
        if (courseError) throw courseError;
        setCourseCount(courseTotal || 0);

        const userId = getUserId();
        if (userId) {
          const { count: enrolledTotal, error: enrollError } = await supabase
            .from("enrollment")
            .select("*", { count: "exact", head: true })
            .eq("user_id", userId);
          if (enrollError) throw enrollError;
          setEnrolledCount(enrolledTotal || 0);

          const { data: userData, error: userError } = await supabase
            .from("auth")
            .select("created_at")
            .eq("id", userId)
            .single();
          if (userError) throw userError;

          if (userData?.created_at) {
            const createdAt = new Date(userData.created_at);
            const now = new Date();
            const diffDays = Math.floor(
              (now - createdAt) / (1000 * 60 * 60 * 24)
            );
            setAccountAge(diffDays);
          } else {
            setAccountAge(0);
          }
        }
      } catch (err) {
        console.error("Error fetching dashboard data:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card bgColor="bg-primary" textColor="text-primary-content">
        <CardBody className="flex items-center space-x-4">
          <BookOpenIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">Courses Available</h3>
            {loading ? (
              <p className="text-sm opacity-80">
                <Loading type="spinner" size="sm" variant="light" />
              </p>
            ) : (
              <p className="text-sm opacity-80">{courseCount} Courses</p>
            )}
          </div>
        </CardBody>
      </Card>

      <Card bgColor="bg-secondary" textColor="text-secondary-content">
        <CardBody className="flex items-center space-x-4">
          <ChartBarIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">Enrolled Courses</h3>
            {loading ? (
              <p className="text-sm opacity-80">
                <Loading type="spinner" size="sm" variant="light" />
              </p>
            ) : (
              <p className="text-sm opacity-80">{enrolledCount} Courses</p>
            )}
          </div>
        </CardBody>
      </Card>

      <Card bgColor="bg-accent" textColor="text-accent-content">
        <CardBody className="flex items-center space-x-4">
          <ClipboardDocumentCheckIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">Account Age</h3>
            {loading ? (
              <p className="text-sm opacity-80">
                <Loading type="spinner" size="sm" variant="light" />
              </p>
            ) : (
              <p className="text-sm opacity-80">{accountAge} Days</p>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
