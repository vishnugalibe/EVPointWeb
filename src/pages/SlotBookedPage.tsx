import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SlotBookedPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/home"), 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-8">
      <div className="bg-secondary/80 rounded-3xl p-12 text-center animate-scale-in">
        <h1 className="text-3xl font-extrabold text-foreground leading-tight">
          Slot booked<br />Successfully
        </h1>
        <p className="text-sm text-foreground/60 mt-4">Redirecting to home...</p>
      </div>
    </div>
  );
};

export default SlotBookedPage;
