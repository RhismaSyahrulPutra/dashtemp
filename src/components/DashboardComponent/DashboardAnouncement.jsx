import Card, { CardBody } from "../UiComponents/Card";
import { InformationCircleIcon } from "@heroicons/react/24/solid";

function DashboardAnouncement() {
  return (
    <div>
      <Card className="bg-warning text-secondary-content">
        <CardBody className="flex items-center space-x-4">
          <InformationCircleIcon className="w-8 h-8" />
          <div>
            <h3 className="font-semibold">Announcement!</h3>
            <p className="text-xs">Small card on the top right.</p>
          </div>
        </CardBody>
      </Card>

      {/* Card kanan bawah */}
      <Card>
        <CardBody className="flex items-center space-x-4">
          <InformationCircleIcon className="w-8 h-8" />
          <div>
            <h3 className="font-semibold">Activity Announcement!</h3>
            <p className="text-xs opacity-80">
              Small card on the bottom right.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}

export default DashboardAnouncement;
