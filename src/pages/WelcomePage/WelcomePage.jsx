import { useNavigate } from "react-router-dom";
import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, { CardBody } from "../../components/UiComponents/Card";
import Button from "../../components/UiComponents/Button";

function WelcomePage() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-screen">
        <Card className="w-full max-w-md">
          <CardBody>
            <h1 className="text-3xl font-bold text-center">Welcome Page</h1>

            <div className="mt-8 flex gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                onClick={() => navigate("/sign-in")}
              >
                Get Started
              </Button>

              <Button
                variant="primary"
                styleType="outline"
                size="lg"
                onClick={() => navigate("/documentation")}
              >
                Documentation
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default WelcomePage;
