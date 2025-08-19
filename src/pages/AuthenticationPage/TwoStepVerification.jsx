import PageWrapper from "../../components/UiComponents/PageWrapper";
import Card, { CardHeader, CardBody } from "../../components/UiComponents/Card";
import Input from "../../components/FormComponents/Input";
import Button from "../../components/UiComponents/Button";
import { useState, useRef } from "react";

function TwoStepVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef([]);

  const handleChange = (value, index) => {
    // Hanya ambil digit angka
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Auto fokus ke input berikutnya jika ada
      if (value && index < otp.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <PageWrapper>
      <div className="flex items-center justify-center min-h-[80vh]">
        <Card className="w-full max-w-md">
          <CardHeader>
            <div className="text-center">
              <h2 className="text-3xl font-semibold">
                Two Factor Authentication
              </h2>
              <p className="mt-2 text-xs opacity-80">
                Enter the 6-digit code sent to your email.
              </p>
            </div>
          </CardHeader>
          <CardBody>
            {/* OTP Input Row */}
            <div className="flex justify-between gap-4 mb-4">
              {otp.map((digit, index) => (
                <Input
                  key={index}
                  value={digit}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                  maxLength={1}
                  color="primary"
                  size="lg"
                  className="text-center text-2xl w-14"
                />
              ))}
            </div>

            <Button type="submit" variant="primary" styleType="default" block>
              Verify
            </Button>
          </CardBody>
        </Card>
      </div>
    </PageWrapper>
  );
}

export default TwoStepVerification;
