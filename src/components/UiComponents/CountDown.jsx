import React, { useState, useEffect } from "react";

const calculateTimeLeft = (targetDate) => {
  const now = new Date();
  const difference = new Date(targetDate) - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

export default function Countdown({ targetDate, bgColor = "neutral" }) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  // Buat kelas bg dan text berdasarkan bgColor
  const bgClass = `bg-${bgColor} rounded-box text-${bgColor}-content`;

  return (
    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
      {/* days tanpa animasi countdown */}
      <div className={`flex flex-col p-2 ${bgClass}`}>
        <span
          className="font-mono text-5xl"
          aria-live="polite"
          aria-label={`${timeLeft.days} days`}
        >
          {timeLeft.days}
        </span>
        days
      </div>

      {/* hours, minutes, seconds dengan animasi countdown */}
      {["hours", "minutes", "seconds"].map((unit) => (
        <div key={unit} className={`flex flex-col p-2 ${bgClass}`}>
          <span className="countdown font-mono text-5xl">
            <span
              style={{
                "--value": timeLeft[unit] ?? 0,
                minWidth: "3ch",
                display: "inline-block",
                textAlign: "center",
              }}
              aria-live="polite"
              aria-label={`${timeLeft[unit] ?? 0} ${unit}`}
            >
              {timeLeft[unit] ?? 0}
            </span>
          </span>
          {unit}
        </div>
      ))}
    </div>
  );
}
