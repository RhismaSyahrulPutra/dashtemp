import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/UiComponents/Card";
import SignInForm from "../../components/AuthComponents/SignInForm";

function SignInPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Sign In</h2>
              <p className="mt-2 text-xs opacity-80">
                Masukkan akun Anda untuk masuk
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <SignInForm />
          </CardBody>
          <CardFooter className="text-center">
            <p className="text-xs">
              Don’t have an account?{" "}
              <a href="/sign-up" className="text-primary hover:underline">
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
