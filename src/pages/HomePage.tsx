import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Zap, Clock, IndianRupee } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const stations = [
  { name: "Zeon Charging Station", distance: "2 KM", amps: "5A", hours: "5 Hrs", price: 30 },
  { name: "Tata Power Charging Station", distance: "1 KM", amps: "10A", hours: "2 Hrs", price: 20 },
  { name: "ElectricPe Charging Station", distance: "2 KM", amps: "15A", hours: "1 Hrs", price: 50 },
  { name: "GLIDA Charging Station", distance: "2.5 KM", amps: "5A", hours: "3 Hrs", price: 27 },
];

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="EV Point" />

      {/* Map placeholder */}
      <div className="mx-4 rounded-2xl overflow-hidden border-2 border-border mb-4 animate-fade-in-up">
        <div className="w-full h-48 bg-primary/30 flex items-center justify-center">
          <iframe
            title="EV Charging Stations Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160tried!2d78.2432!3d17.3850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            className="w-full h-48 border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      {/* Book CTA */}
      <div className="mx-4 mb-4 animate-fade-in-up stagger-1">
        <button
          onClick={() => navigate("/book-charging")}
          className="w-full py-4 rounded-2xl bg-primary font-bold text-xl text-foreground border-2 border-border transition-all active:scale-97"
        >
          Book Charging Slots
        </button>
      </div>

      {/* Stations List */}
      <div className="mx-4">
        <h2 className="text-xl font-bold text-foreground mb-3 animate-fade-in-up stagger-2">Charging Slots near you</h2>
        <div className="space-y-3">
          {stations.map((s, i) => (
            <div
              key={s.name}
              onClick={() => navigate("/book-charging")}
              className={`animate-fade-in-up stagger-${i + 2} bg-primary/20 border-2 border-border rounded-2xl p-4 cursor-pointer transition-all hover:shadow-md active:scale-[0.98]`}
            >
              <div className="flex items-center gap-1 mb-2">
                <MapPin className="w-4 h-4 text-ev-green-dark" />
                <span className="font-bold text-foreground">{s.name}</span>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{s.distance}</span>
                <span className="flex items-center gap-1"><Zap className="w-3 h-3" />{s.amps}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{s.hours}</span>
                <span className="flex items-center gap-1"><IndianRupee className="w-3 h-3" />₹ {s.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default HomePage;
