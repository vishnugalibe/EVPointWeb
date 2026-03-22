import React from "react";
import { MapPin, Clock, IndianRupee, Calendar, MoreVertical } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const history = [
  { name: "Zeon Charging Station", date: "25, May", hours: "3 Hours", price: 30 },
  { name: "Tata Power Charging Station", date: "21, Nov", hours: "3 Hours", price: 100 },
  { name: "GLIDA Power Charging Station", date: "10, Dec", hours: "6 Hours", price: 65 },
  { name: "Mahendra Power Charging Station", date: "21, Nov", hours: "2 Hours", price: 27 },
  { name: "GaVi Power Charging Station", date: "19, May", hours: "5 Hours", price: 29 },
  { name: "Charge Power", date: "19, Feb", hours: "1 Hour", price: 25 },
];

const HistoryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="History" />

      <div className="mx-4 space-y-3">
        {history.map((h, i) => (
          <div
            key={h.name + i}
            className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)} bg-primary rounded-2xl p-4 border-2 border-border relative`}
          >
            <div className="flex items-center gap-1 mb-2">
              <MapPin className="w-4 h-4 text-foreground" />
              <span className="font-bold text-foreground text-sm">{h.name}</span>
              <MoreVertical className="w-4 h-4 text-foreground/50 ml-auto" />
            </div>
            <div className="flex items-center gap-4 text-xs text-foreground/70">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{h.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{h.hours}</span>
              <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" />₹ {h.price}</span>
            </div>
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default HistoryPage;
