import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Phone, MessageSquare, Bluetooth, MapPin, Calendar } from "lucide-react";
import evChargerIcon from "@/assets/ev-charger-icon.png";

const permissions = [
  { icon: Phone, label: "Phone" },
  { icon: MessageSquare, label: "SMS" },
  { icon: Bluetooth, label: "Bluetooth" },
  { icon: MapPin, label: "Location" },
  { icon: Calendar, label: "Calendar" },
];

const PermissionsPage: React.FC = () => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState<boolean[]>(new Array(5).fill(false));

  const toggle = (i: number) => {
    const c = [...checked];
    c[i] = !c[i];
    setChecked(c);
  };

  return (
    <div className="min-h-screen bg-primary flex flex-col items-center px-6 pt-8 pb-12">
      <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
        <div className="w-14 h-14 rounded-full bg-background flex items-center justify-center shadow-lg cursor-pointer" onClick={() => navigate("/otp")}>
          <img src={evChargerIcon} alt="EV Point" className="w-8 h-8 object-contain" />
        </div>
        <h1 className="text-2xl font-extrabold text-foreground">EV Point</h1>
      </div>

      <h2 className="text-xl font-semibold text-foreground mb-6 animate-fade-in-up stagger-1">Permissions</h2>

      <div className="w-full max-w-sm space-y-3">
        {permissions.map((p, i) => (
          <button
            key={p.label}
            onClick={() => toggle(i)}
            className={`animate-fade-in-up stagger-${i + 1} w-full flex items-center gap-4 px-5 py-4 rounded-xl border-2 transition-all active:scale-97 ${
              checked[i] ? "border-ev-green-dark bg-primary/80" : "border-foreground/30 bg-primary/40"
            }`}
          >
            <p.icon className="w-6 h-6 text-foreground" />
            <span className="text-lg font-semibold text-foreground">{p.label}</span>
          </button>
        ))}
      </div>

      <div className="flex-1" />

      <button
        onClick={() => navigate("/home")}
        className="ev-btn-dark w-full max-w-sm py-4 mt-8 animate-fade-in-up stagger-6"
      >
        Accept Permissions
      </button>
    </div>
  );
};

export default PermissionsPage;
