import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import evChargerIcon from "@/assets/ev-charger-icon.png";

const OTPPage: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value[value.length - 1];
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) refs[index + 1].current?.focus();
  };

  const handleVerify = () => {
    if (otp.every((d) => d !== "")) {
      navigate("/permissions");
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="flex items-center gap-3 p-6 animate-fade-in-up">
        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg">
          <img src={evChargerIcon} alt="EV Point" className="w-7 h-7 object-contain" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground">EV Point</h1>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-12">
        <h2 className="text-xl font-bold text-foreground mb-4 animate-fade-in-up stagger-1">One - Time Password</h2>
        
        <div className="flex gap-3 mb-6 animate-fade-in-up stagger-2">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={refs[i]}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-16 h-16 text-center text-2xl font-bold border-2 border-foreground rounded-xl bg-primary/50 text-foreground focus:outline-none focus:ring-2 focus:ring-ev-green-dark"
            />
          ))}
        </div>

        <button
          onClick={handleVerify}
          className="ev-btn w-full max-w-xs text-lg animate-fade-in-up stagger-3"
        >
          Verification Done
        </button>
      </div>
    </div>
  );
};

export default OTPPage;
