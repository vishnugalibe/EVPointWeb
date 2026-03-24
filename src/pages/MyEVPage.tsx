import React from "react";
import { useNavigate } from "react-router-dom";
import { Bluetooth } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import evScooter from "@/assets/ev-scooter.png";

const menuItems = [
  { label: "Profile", path: "/profile" },
  { label: "Setting", path: "/settings" },
  { label: "Notification", path: null },
  { label: "Help", path: "/help" },
  { label: "Franchise", path: "/franchise" },
  { label: "EV Tips", path: "/ev-tips" },
];

const MyEVPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="My EV" />

      <div className="mx-4 mb-6 animate-fade-in-up">
        <div className="bg-primary rounded-2xl p-6 border-2 border-border">
          <div className="flex justify-center mb-3">
            <img src={evScooter} alt="OLA S1 Pro" className="w-32 h-auto" />
          </div>
          <h2 className="text-center font-bold text-lg text-foreground mb-4">OLA S1 Pro</h2>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <span className="text-xl font-bold text-foreground">89%</span>
              <p className="text-[10px] text-foreground/60">Charging</p>
            </div>
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <span className="text-xl font-bold text-foreground">98</span>
              <p className="text-[10px] text-foreground/60">Excepted KM</p>
            </div>
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <Bluetooth className="w-6 h-6 mx-auto text-foreground" />
              <p className="text-[10px] text-foreground/60">Bluetooth</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <span className="text-xl font-bold text-foreground">5A</span>
              <p className="text-[10px] text-foreground/60">Socket</p>
            </div>
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <span className="text-xl font-bold text-foreground">9-3</span>
              <p className="text-[10px] text-foreground/60">Last Charged</p>
            </div>
            <div className="border-2 border-border rounded-xl p-3 text-center">
              <span className="text-xl font-bold text-foreground">1-2</span>
              <p className="text-[10px] text-foreground/60">Last Service</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 space-y-2 mb-6">
        {menuItems.map((item, i) => (
          <button
            key={item.label}
            onClick={() => item.path && navigate(item.path)}
            className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)} w-full text-left px-5 py-3.5 bg-primary rounded-xl font-semibold text-foreground border-2 border-border transition-all active:scale-[0.98]`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="mx-4 mb-6 animate-fade-in-up">
        <button
          onClick={() => navigate("/")}
          className="w-full py-4 rounded-xl bg-primary/60 font-bold text-lg text-foreground border-2 border-border transition-all active:scale-97"
        >
          Log Out
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

export default MyEVPage;
