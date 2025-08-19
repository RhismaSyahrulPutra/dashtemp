import PageWrapper from "../../components/UiComponents/PageWrapper";
import DashboardHeader from "../../components/DashboardComponent/DashboardHeader";
import DashboardGPAChart from "../../components/DashboardComponent/DashboardGPAChart";
import DashboardAnouncement from "../../components/DashboardComponent/DashboardAnouncement";
import {
  Avatar,
  AvatarGroup,
  AvatarWithStatus,
} from "../../components/UiComponents/Avatar";

export default function Dashboard() {
  return (
    <PageWrapper>
      <DashboardHeader />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* GPA Chart */}
        <DashboardGPAChart />

        {/* Announcement */}
        <DashboardAnouncement />
      </div>
    </PageWrapper>
  );
}
