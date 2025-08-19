import Card, { CardHeader, CardBody } from "../UiComponents/Card";
import InputLabel from "../FormComponents/InputLabel";
import Textarea from "../FormComponents/Textarea";

function AddressInformation() {
  return (
    <Card>
      <CardHeader>
        <h4 className="font-semibold text-primary">Address</h4>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        {/* Row 1: Country & City/State */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">Country</span>
            <InputLabel
              type="text"
              defaultValue="Indonesia"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">
              City/State
            </span>
            <InputLabel
              type="text"
              defaultValue="Bandung"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
        </div>

        {/* Row 2: Postal Code & Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">
              Postal Code
            </span>
            <InputLabel
              type="text"
              defaultValue="12345"
              disabled
              size="md"
              color="primary"
              variant="input"
              className="w-full"
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-600">Address</span>
            <Textarea
              defaultValue="221B Baker Street, Apartment 404"
              disabled
              color="primary"
              size="md"
              rows={4}
              className="w-full"
            />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default AddressInformation;
