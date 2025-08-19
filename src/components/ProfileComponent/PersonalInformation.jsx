import Card, { CardHeader, CardBody } from "../UiComponents/Card";
import InputLabel from "../FormComponents/InputLabel";
import Textarea from "../FormComponents/Textarea";

function PersonalInformation() {
  return (
    <Card>
      <CardHeader>
        <h4 className="font-semibold text-primary">Personal Information</h4>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        {/* Row 1: First Name & Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">
              First Name
            </span>
            <InputLabel
              type="text"
              defaultValue="Choi"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">Last Name</span>
            <InputLabel
              type="text"
              defaultValue="YoungDok"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
        </div>

        {/* Row 2: Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">
              Email Address
            </span>
            <InputLabel
              type="email"
              defaultValue="Randomuser1@gmail.com"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">
              Phone Number
            </span>
            <InputLabel
              type="tel"
              defaultValue="+62 812-3456-7890"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
        </div>

        {/* Row 3: Bio */}
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-600">Bio</span>
          <Textarea
            defaultValue="Junior FullStack Developer"
            disabled
            color="primary"
            size="md"
            rows={4}
            className="w-full"
          />
        </div>
      </CardBody>
    </Card>
  );
}

export default PersonalInformation;
