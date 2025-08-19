import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/UiComponents/Card";
import InputLabel from "../../components/FormComponents/InputLabel";
import Checkbox from "../../components/FormComponents/Checkbox";
import Button from "../../components/UiComponents/Button";

function SignInPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Sign In</h2>
              <p className="mt-2 text-xs opacity-80">deskripsi singkat</p>
            </div>
          </CardHeader>
          <CardBody>
            <form className="space-y-4">
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

              {/* Remember Me + Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="rememberMe"
                    color="primary"
                    size="xs"
                    defaultChecked={false}
                  />
                  <label
                    htmlFor="rememberMe"
                    className="text-xs cursor-pointer select-none"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="/auth/reset-password"
                  className="text-xs text-primary hover:underline"
                >
                  Forgot the password?
                </a>
              </div>

              <Button type="submit" variant="primary" styleType="default" block>
                Sign In
              </Button>
            </form>
          </CardBody>

          <CardFooter className="text-center">
            <p className="text-xs">
              Don’t have an account?{" "}
              <a href="/auth/sign-up" className="text-primary hover:underline">
                Sign Up
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default SignInPage;
