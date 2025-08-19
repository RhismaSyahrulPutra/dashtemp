import Card, { CardBody } from "../UiComponents/Card";
import {
  UserIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";

export default function DashboardHeader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Card 1 */}
      <Card bgColor="bg-primary" textColor="text-primary-content">
        <CardBody className="flex items-center space-x-4">
          <UserIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">Credits Earned</h3>
            <p className="text-sm opacity-80">999 Credits</p>
          </div>
        </CardBody>
      </Card>

      {/* Card 2 */}
      <Card bgColor="bg-secondary" textColor="text-secondary-content">
        <CardBody className="flex items-center space-x-4">
          <ChartBarIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">GPA</h3>
            <p className="text-sm opacity-80">4.4444</p>
          </div>
        </CardBody>
      </Card>

      {/* Card 3 */}
      <Card bgColor="bg-accent" textColor="text-accent-content">
        <CardBody className="flex items-center space-x-4">
          <ClipboardDocumentCheckIcon className="w-10 h-10" />
          <div>
            <h3 className="font-semibold">Study Duration</h3>
            <p className="text-sm opacity-80">6 Semesters</p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
