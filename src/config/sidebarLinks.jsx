import {
  Squares2X2Icon,
  UserIcon,
  BookOpenIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";

const sidebarLinks = [
  { name: "Dashboard", path: "/dashboard", icon: Squares2X2Icon },
  { name: "Profile", path: "/profile", icon: UserIcon },
  {
    name: "Courses",
    icon: BookOpenIcon,
    children: [
      {
        name: "Available Course",
        path: "/courses/available-courses",
        icon: BookOpenIcon,
      },
      {
        name: "Enrolled Course",
        path: "/courses/enrolled-courses",
        icon: CheckCircleIcon,
      },
    ],
  },
  {
    name: "Quiz",
    icon: ChartBarIcon,
    children: [
      { name: "A - E", path: "/quiz/a-e" },
      { name: "F - J", path: "/quiz/f-j" },
      { name: "K - O", path: "/quiz/k-o" },
      { name: "P - T", path: "/quiz/p-t" },
      { name: "U - Z", path: "/quiz/u-z" },
    ],
  },
  {
    name: "Camera",
    path: "/camera",
    icon: CameraIcon,
  },
];

export default sidebarLinks;
