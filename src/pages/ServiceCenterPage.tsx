import React from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, IndianRupee } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";

const serviceCenters = [
  { name: "Venkateshwara EV Service Center", distance: "2 KM", price: 1500 },
  { name: "Sri Srinivasa EV Service Center", distance: "0.6 KM", price: 2500 },
  { name: "Shiva EV Service Center", distance: "5 KM", price: 500 },
  { name: "GLIDA EV Service Center", distance: "1 KM", price: 1900 },
];

const ServiceCenterPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Service Center" />

      {/* Location Banner */}
      <div className="mx-4 mb-4 animate-fade-in-up">
        <div className="bg-primary rounded-2xl p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Bike className="w-6 h-6 text-foreground" />
            <span className="font-bold text-lg text-foreground">Electric Charging Station</span>
          </div>
          <p className="text-sm text-foreground/70">Yakutpura, Hyderabad</p>
        </div>
      </div>

      {/* Map */}
      <div className="mx-4 mb-4 animate-fade-in-up stagger-1">
        <h3 className="font-bold text-lg text-foreground mb-2 bg-primary/30 rounded-t-2xl px-4 pt-3">Electric Vehicle Service Center</h3>
        <div className="rounded-b-2xl overflow-hidden border-2 border-border">
          <iframe
            title="Service Centers Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60895.0!2d78.47!3d17.36!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
            className="w-full h-44 border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      {/* Service Centers List */}
      <div className="mx-4 space-y-3 mb-6">
        {serviceCenters.map((sc, i) => (
          <div key={sc.name} className={`animate-fade-in-up stagger-${i + 2} bg-primary/10 border-2 border-border rounded-2xl p-4 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-ev-green-dark flex-shrink-0" />
              <span className="font-semibold text-foreground text-sm">{sc.name}</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-muted-foreground flex-shrink-0">
              <span>{sc.distance}</span>
              <span className="flex items-center"><IndianRupee className="w-3 h-3" />₹ {sc.price}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Book CTA */}
      <div className="mx-4 mb-6 animate-fade-in-up stagger-6">
        <button
          onClick={() => navigate("/book-service")}
          className="w-full py-4 rounded-2xl bg-primary font-bold text-lg text-foreground border-2 border-border transition-all active:scale-97"
        >
          Book EV Service Center
        </button>
      </div>

      <BottomNav />
    </div>
  );
};

const Bike: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/>
    <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5V14l-3-3 4-3 2 3h2"/>
  </svg>
);

export default ServiceCenterPage;
