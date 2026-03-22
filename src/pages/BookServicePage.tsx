import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageHeader from "@/components/PageHeader";

const locations = ["Miyapur, Hyderabad", "Lakdikapul, Hyderabad", "Secunderabad"];
const chargingTypes = ["5A", "10A", "15A", "20A"];

const BookServicePage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", location: "", evModel: "", serviceCenter: "", chargingType: "", date: "", time: "", amount: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("Card");
  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="min-h-screen bg-background pb-6">
      <PageHeader title="Service Center near you" />

      <div className="mx-4 mb-4 animate-fade-in-up">
        <div className="bg-primary/30 rounded-2xl p-4 border-2 border-border">
          <h3 className="ev-section-label mb-3 px-2 py-1 rounded-lg inline-block">Biker Details</h3>
          <input className="ev-input w-full mb-2" placeholder="Enter name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          <div className="relative">
            <select className="ev-input w-full appearance-none pr-10" value={form.location} onChange={(e) => update("location", e.target.value)}>
              <option value="">Enter location</option>
              {locations.map((l) => <option key={l} value={l}>{l}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="mx-4 mb-4 animate-fade-in-up stagger-1">
        <div className="bg-primary/10 rounded-2xl p-4 border-2 border-border">
          <h3 className="ev-section-label mb-3 px-2 py-1 rounded-lg inline-block">EV Details</h3>
          <input className="ev-input w-full mb-2" placeholder="Enter EV Model" value={form.evModel} onChange={(e) => update("evModel", e.target.value)} />
          <input className="ev-input w-full mb-2" placeholder="Enter EV service center" value={form.serviceCenter} onChange={(e) => update("serviceCenter", e.target.value)} />
          <div className="relative mb-2">
            <select className="ev-input w-full appearance-none pr-10" value={form.chargingType} onChange={(e) => update("chargingType", e.target.value)}>
              <option value="">Enter EV Charging Type</option>
              {chargingTypes.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground pointer-events-none" />
          </div>
          <input className="ev-input w-full mb-2" type="date" value={form.date} onChange={(e) => update("date", e.target.value)} />
          <input className="ev-input w-full" type="time" value={form.time} onChange={(e) => update("time", e.target.value)} />
        </div>
      </div>

      <div className="mx-4 mb-6 animate-fade-in-up stagger-2">
        <div className="bg-primary/30 rounded-2xl p-4 border-2 border-border">
          <h3 className="ev-section-label mb-3 px-2 py-1 rounded-lg inline-block">Payment Details</h3>
          <input className="ev-input w-full mb-3" placeholder="Enter amount" value={form.amount} onChange={(e) => update("amount", e.target.value)} />
          <div className="flex gap-2">
            {["Card", "Cash", "UPI"].map((m) => (
              <button key={m} onClick={() => setPaymentMethod(m)} className={`px-4 py-2 rounded-lg border-2 text-sm font-medium transition-all ${paymentMethod === m ? "border-ev-green-dark bg-primary text-foreground" : "border-border bg-background text-muted-foreground"}`}>
                {m}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-4 animate-fade-in-up stagger-3">
        <button onClick={() => navigate("/slot-booked")} className="w-full py-4 rounded-2xl border-2 border-foreground font-bold text-lg text-foreground bg-background transition-all active:scale-97">
          Book Service Center
        </button>
      </div>
    </div>
  );
};

export default BookServicePage;
