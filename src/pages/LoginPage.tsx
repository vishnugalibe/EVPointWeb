import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import evChargerIcon from "@/assets/ev-charger-icon.png";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = () => {
    if (phone.length >= 10 && agreed) {
      navigate("/otp", { state: { phone } });
    }
  };

  const handleKeyPress = (digit: string) => {
    if (digit === "X") {
      setPhone((p) => p.slice(0, -1));
    } else if (digit === "→") {
      handleSubmit();
    } else if (phone.length < 10) {
      setPhone((p) => p + digit);
    }
  };

  const formatPhone = (p: string) => {
    if (!p) return "";
    return `+91  ${p.slice(0, 5)} ${p.slice(5)}`;
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="flex items-center gap-3 p-6 animate-fade-in-up">
        <div className="w-12 h-12 rounded-full bg-background flex items-center justify-center shadow-lg">
          <img src={evChargerIcon} alt="EV Point" className="w-7 h-7 object-contain" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground">EV Point</h1>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-8">
        <h2 className="text-2xl font-bold text-foreground mb-6 animate-fade-in-up stagger-1">Log in / Sign up</h2>
        
        <div className="w-full max-w-sm animate-fade-in-up stagger-2">
          <div className="border-2 border-foreground rounded-2xl px-5 py-4 bg-primary/50 min-h-[56px] flex items-center">
            <span className="text-lg font-medium text-foreground">
              {phone ? formatPhone(phone) : "Enter Mobile Number"}
            </span>
          </div>
        </div>

        <label className="flex items-center gap-2 mt-4 animate-fade-in-up stagger-3">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="w-5 h-5 accent-ev-green-dark"
          />
          <span className="text-sm text-foreground font-medium">Terms and Condition statements</span>
        </label>
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

export default LoginPage;
