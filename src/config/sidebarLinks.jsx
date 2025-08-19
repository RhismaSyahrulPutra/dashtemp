// src/config/sidebarLinks.jsx
import {
  Squares2X2Icon,
  CalendarDaysIcon,
  UserIcon,
  DocumentTextIcon,
  ClipboardDocumentCheckIcon,
  ChartBarIcon,
  PuzzlePieceIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";

const sidebarLinks = [
  { name: "Dashboard", path: "/", icon: Squares2X2Icon },

  { name: "Profile", path: "/profile", icon: UserIcon },

  {
    name: "Task",
    icon: ClipboardDocumentCheckIcon,
    children: [
      { name: "List", path: "/task/List" },
      { name: "Kanban", path: "/task/Kanban" },
    ],
  },
  {
    name: "Tables",
    icon: ClipboardDocumentCheckIcon,
    children: [{ name: "Simple Table", path: "/table/simple-table" }],
  },

  {
    name: "Charts",
    icon: ChartBarIcon,
    children: [
      { name: "Line Chart", path: "/chart/line-chart" },
      { name: "Bar Chart", path: "/chart/bar-chart" },
      { name: "Pie Chart", path: "/chart/pie-chart" },
    ],
  },

  {
    name: "UI Components",
    icon: PuzzlePieceIcon,
    children: [
      { name: "Accordion", path: "/ui/accordion" },
      { name: "Avatar", path: "/ui/avatar" },
      { name: "Badge", path: "/ui/badge" },
      { name: "Button", path: "/ui/button" },
      { name: "Card", path: "/ui/card" },
      { name: "Collapse", path: "/ui/collapse" },
      { name: "Count Down", path: "/ui/countdown" },
      { name: "Divider", path: "/ui/divider" },
      { name: "Header", path: "/ui/header" },
      { name: "Modal", path: "/ui/modal" },
      { name: "Page Wrapper", path: "/ui/page-wrapper" },
      { name: "Pagination", path: "/ui/pagination" },
      { name: "Progress Bar", path: "/ui/progress-bar" },
      { name: "Status", path: "/ui/status" },
      { name: "Steps", path: "/ui/steps" },
      { name: "Table", path: "/ui/table" },
      { name: "Tabs", path: "/ui/tabs" },
      { name: "Tooltip", path: "/ui/tooltip" },
    ],
  },

  {
    name: "Form Elements",
    icon: DocumentTextIcon,
    children: [
      { name: "Checkbox", path: "/form-elements/checkbox" },
      { name: "Checkbox Group", path: "/form-elements/checkbox-group" },
      { name: "Date Input", path: "/form-elements/date-input" },
      { name: "Fieldset", path: "/form-elements/fieldset" },
      { name: "File Input", path: "/form-elements/file-input" },
      { name: "Filter Group", path: "/form-elements/filter-group" },
      { name: "Input", path: "/form-elements/input" },
      { name: "Input Label", path: "/form-elements/input-label" },
      { name: "Radio", path: "/form-elements/radio" },
      { name: "Radio Group", path: "/form-elements/radio-group" },
      { name: "Range", path: "/form-elements/range" },
      { name: "Select", path: "/form-elements/select" },
      { name: "Textarea", path: "/form-elements/textarea" },
      { name: "Toggle", path: "/form-elements/toggle" },
      { name: "Validator", path: "/form-elements/validator" },
    ],
  },

  {
    name: "Authentication",
    icon: LockClosedIcon,
    children: [
      { name: "Sign In", path: "/auth/sign-in" },
      { name: "Sign Up", path: "/auth/sign-up" },
      { name: "Reset Password", path: "/auth/reset-password" },
      { name: "Two-Step Verification", path: "/auth/two-step-verification" },
    ],
  },
];

export default sidebarLinks;
