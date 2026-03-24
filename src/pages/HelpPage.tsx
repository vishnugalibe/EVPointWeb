import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { ChevronDown, ChevronUp, Zap, MapPin, Clock, Settings, CreditCard, HelpCircle } from "lucide-react";

const helpItems = [
  {
    icon: Zap,
    title: "Book Charging Slots",
    desc: "Tap 'Book Charging Slots' on the home screen to find nearby charging stations. Select your preferred station, choose date & time, and confirm your booking."
  },
  {
    icon: MapPin,
    title: "Find Service Centers",
    desc: "Navigate to 'Service Center' from the bottom menu. Browse nearby service centers, compare prices, and book a service appointment."
  },
  {
    icon: Clock,
    title: "View Booking History",
    desc: "Tap 'History' in the bottom navigation to see all your past charging and service bookings with details like date, duration, and cost."
  },
  {
    icon: Settings,
    title: "My EV Settings",
    desc: "Access 'My EV' to view your vehicle details including battery status, expected range, and Bluetooth connectivity. You can also manage your profile and settings."
  },
  {
    icon: CreditCard,
    title: "Payment Options",
    desc: "EV Point supports Card, Cash, and UPI payments. Choose your preferred method while booking a charging slot or service."
  },
  {
    icon: HelpCircle,
    title: "Franchise Opportunities",
    desc: "Want to start your own EV charging business? Go to My EV → Franchise to fill out the application form and get started."
  },
];

const HelpPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Help" />

      <div className="mx-4 mb-4">
        <p className="text-sm text-muted-foreground">Learn how to use EV Point and get the most out of the app.</p>
      </div>

      <div className="mx-4 space-y-3">
        {helpItems.map((item, i) => (
          <div key={i} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)} bg-primary/20 rounded-xl border-2 border-border overflow-hidden`}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <item.icon className="w-5 h-5 text-ev-green-dark flex-shrink-0" />
              <span className="font-semibold text-foreground flex-1">{item.title}</span>
              {expanded === i ? <ChevronUp className="w-5 h-5 text-foreground" /> : <ChevronDown className="w-5 h-5 text-foreground" />}
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pt-0">
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mx-4 mt-6 animate-fade-in-up">
        <a
          href="https://evpoint.documentation.in"
          target="_blank"
          rel="noopener noreferrer"
          className="ev-btn-dark w-full block text-center"
        >
          View Full Documentation
        </a>
      </div>

      <BottomNav />
    </div>
  );
};

export default HelpPage;
