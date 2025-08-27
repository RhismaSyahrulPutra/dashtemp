import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, {
  CardHeader,
  CardBody,
  CardFooter,
} from "../../components/UiComponents/Card";
import SignUpForm from "../../components/AuthComponents/SignUpForm";

function SignUpPage() {
  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[100vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Sign Up</h2>
              <p className="mt-2 text-xs opacity-80">
                Buat akun baru untuk mulai menggunakan aplikasi
              </p>
            </div>
          </CardHeader>
          <CardBody>
            <SignUpForm />
          </CardBody>
          <CardFooter className="text-center">
            <p className="text-xs">
              Have an account?{" "}
              <a href="/sign-in" className="text-primary hover:underline">
                Sign In
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default SignUpPage;
