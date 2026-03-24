import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import evChargerIcon from "@/assets/ev-charger-icon.png";

const OTPPage: React.FC = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(["", "", "", ""]);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];

  const handleKeyPress = (digit: string) => {
    if (digit === "X") {
      const lastFilled = otp.findLastIndex((d) => d !== "");
      if (lastFilled >= 0) {
        const newOtp = [...otp];
        newOtp[lastFilled] = "";
        setOtp(newOtp);
      }
    } else if (digit === "→") {
      if (otp.every((d) => d !== "")) navigate("/permissions");
    } else {
      const firstEmpty = otp.findIndex((d) => d === "");
      if (firstEmpty >= 0) {
        const newOtp = [...otp];
        newOtp[firstEmpty] = digit;
        setOtp(newOtp);
      }
    }
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="flex items-center gap-3 p-6 animate-fade-in-up">
        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg cursor-pointer" onClick={() => navigate("/login")}>
          <img src={evChargerIcon} alt="EV Point" className="w-7 h-7 object-contain" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground">EV Point</h1>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        <h2 className="text-xl font-bold text-foreground mb-4 animate-fade-in-up stagger-1">One - Time Password</h2>
        
        <div className="flex gap-3 mb-6 animate-fade-in-up stagger-2">
          {otp.map((digit, i) => (
            <div
              key={i}
              className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-foreground rounded-xl bg-primary/50 text-foreground"
            >
              {digit || ""}
            </div>
          ))}
        </div>

        <button
          onClick={() => otp.every((d) => d !== "") && navigate("/permissions")}
          className="ev-btn-dark w-full max-w-xs text-lg animate-fade-in-up stagger-3"
        >
          Verification Done
        </button>
      </div>

      {/* Numpad */}
      <div className="grid grid-cols-3 border-t-2 border-foreground animate-slide-up">
        {["1","2","3","4","5","6","7","8","9","X","0","→"].map((key) => (
          <button
            key={key}
            onClick={() => handleKeyPress(key)}
            className={`py-5 text-2xl font-bold border border-foreground/20 transition-all active:scale-95 ${
              key === "→" ? "bg-foreground text-background" : "bg-primary text-foreground"
            }`}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OTPPage;
