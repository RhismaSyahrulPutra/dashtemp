import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/UiComponents/Card";
import InputLabel from "../../components/FormComponents/InputLabel";
import Button from "../../components/UiComponents/Button";

function ResetPassword() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Reset Password</h2>
              <p className="mt-2 text-xs opacity-80">
                Please enter your current and new password to reset your
                account.
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <form className="space-y-4">
              <div>
                <span className="text-sm font-medium">Current Password</span>
                <InputLabel
                  type="password"
                  placeholder="Enter your current password"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>
              <div>
                <span className="text-sm font-medium">New Password</span>
                <InputLabel
                  type="password"
                  placeholder="Enter your new password"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>

              <div>
                <span className="text-sm font-medium">
                  Confirm New Password
                </span>
                <InputLabel
                  type="password"
                  placeholder="Re-enter your new password"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>

              <Button type="submit" variant="primary" styleType="default" block>
                Reset Password
              </Button>
            </form>
          </CardBody>
          <CardFooter className="text-center">
            <p className="text-xs">
              Remember your password?{" "}
              <a href="/auth/sign-in" className="text-primary hover:underline">
                Sign In
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default ResetPassword;
