import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SlotBookedPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 3500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="bg-secondary/80 rounded-3xl p-12 text-center animate-scale-in">
        {/* Tick mark */}
        <div className="flex justify-center mb-6">
          <svg width="80" height="80" viewBox="0 0 80 80" className="animate-scale-in">
            <circle cx="40" cy="40" r="36" fill="none" stroke="hsl(120, 100%, 25%)" strokeWidth="4" />
            <path
              d="M24 42 L34 52 L56 30"
              fill="none"
              stroke="hsl(120, 100%, 25%)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="50"
              className="animate-checkmark"
            />
          </svg>
        </div>
        <h1 className="text-3xl font-extrabold text-foreground leading-tight">
          Slot booked<br />Successfully
        </h1>
        <p className="text-sm text-foreground/60 mt-4">Redirecting to home...</p>
      </div>
    </div>
  );
};

export default SlotBookedPage;
