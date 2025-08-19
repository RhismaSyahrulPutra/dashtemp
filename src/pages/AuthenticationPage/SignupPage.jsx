import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/UiComponents/Card";
import InputLabel from "../../components/FormComponents/InputLabel";
import Button from "../../components/UiComponents/Button";

function SignupPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Sign Up</h2>
              <p className="mt-2 text-xs opacity-80">deskripsi singkat</p>
            </div>
          </CardHeader>
          <CardBody>
            <form className="space-y-4">
              <div>
                <span className="text-sm font-medium">Full Name</span>
                <InputLabel
                  type="email"
                  placeholder="Enter your Full Name"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>
              <div>
                <span className="text-sm font-medium">Email</span>
                <InputLabel
                  type="email"
                  placeholder="Enter your email"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full"
                />
              </div>

              <div>
                <span className="text-sm font-medium">Password</span>
                <InputLabel
                  type="password"
                  placeholder="Enter your password"
                  size="md"
                  value=""
                  color="primary"
                  onChange={() => {}}
                  className="w-full primary"
                />
              </div>

              <Button type="submit" variant="primary" styleType="default" block>
                Sign Up
              </Button>
            </form>
          </CardBody>
          <CardFooter className="text-center">
            <p className="text-xs">
              have an account?{" "}
              <a href="/auth/sign-In" className="text-primary hover:underline">
                Sign In
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default SignupPage;
