import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Zap, Building2, Clock, Bike } from "lucide-react";

const tabs = [
  { path: "/home", icon: Zap, label: "EV Point" },
  { path: "/service-center", icon: Building2, label: "Service" },
  { path: "/history", icon: Clock, label: "History" },
  { path: "/my-ev", icon: Bike, label: "My EV" },
];

const BottomNav: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t-2 border-border flex justify-around items-center h-16 z-50 max-w-lg mx-auto">
      {tabs.map((tab) => {
        const isActive = location.pathname === tab.path;
        return (
          <button
            key={tab.path}
            onClick={() => navigate(tab.path)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ${
              isActive ? "bg-primary/20" : ""
            }`}
          >
            <tab.icon
              className={`w-6 h-6 ${isActive ? "text-ev-green-dark" : "text-muted-foreground"}`}
            />
            <span className={`text-[10px] mt-0.5 font-medium ${isActive ? "text-ev-green-dark" : "text-muted-foreground"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
