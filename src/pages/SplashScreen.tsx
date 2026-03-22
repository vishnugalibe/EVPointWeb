import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import evChargerIcon from "@/assets/ev-charger-icon.png";

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => navigate("/login"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-primary relative">
      <div className={`flex flex-col items-center transition-all duration-700 ${show ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
        <div className="w-24 h-24 rounded-full bg-background flex items-center justify-center shadow-xl mb-4">
          <img src={evChargerIcon} alt="EV Point" className="w-14 h-14 object-contain" />
        </div>
        <h1 className="text-3xl font-extrabold text-foreground">EV Point</h1>
      </div>
      <p className={`absolute bottom-12 text-foreground font-semibold text-sm transition-all duration-700 delay-500 ${show ? "opacity-100" : "opacity-0"}`}>
        Made in Bharat for the World
      </p>
    </div>
  );
};

export default SplashScreen;
