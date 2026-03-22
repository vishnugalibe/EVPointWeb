import React from "react";
import evChargerIcon from "@/assets/ev-charger-icon.png";

interface PageHeaderProps {
  title: string;
  className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, className = "" }) => (
  <div className={`flex items-center gap-3 p-4 ${className}`}>
    <div className="w-10 h-10 rounded-full bg-background flex items-center justify-center shadow-md">
      <img src={evChargerIcon} alt="EV Point" className="w-6 h-6 object-contain" />
    </div>
    <h1 className="text-xl font-extrabold text-foreground">{title}</h1>
  </div>
);

export default PageHeader;
