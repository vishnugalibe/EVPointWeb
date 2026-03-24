import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHeader from "@/components/PageHeader";

const FranchisePage: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "", dob: "", phone: "", bizName: "", bizType: "", bizPlace: "", chargerType: "", numChargers: "", capacity: "",
  });
  const update = (key: string, val: string) => setForm((f) => ({ ...f, [key]: val }));

  return (
    <div className="min-h-screen bg-primary pb-8">
      <PageHeader title="Franchise / EV Biz" />
      <p className="px-4 text-sm text-foreground/80 mb-4 -mt-2">Open a new franchise with us and through government</p>

      <div className="mx-4 mb-4 animate-fade-in-up">
        <div className="bg-background rounded-2xl p-4 border-2 border-ev-green-dark shadow-sm">
          <h3 className="font-bold text-sm text-foreground mb-3 px-2 py-1 bg-primary rounded-lg inline-block">Owner Details</h3>
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter Date of Birth" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} />
          <input className="ev-input w-full border border-border rounded-lg" placeholder="Enter Phone Number" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
        </div>
      </div>

      <div className="mx-4 mb-4 animate-fade-in-up stagger-1">
        <div className="bg-background rounded-2xl p-4 border-2 border-ev-green-dark shadow-sm">
          <h3 className="font-bold text-sm text-foreground mb-3 px-2 py-1 bg-primary rounded-lg inline-block">Biz Details</h3>
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter Business Name" value={form.bizName} onChange={(e) => update("bizName", e.target.value)} />
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter Business Type" value={form.bizType} onChange={(e) => update("bizType", e.target.value)} />
          <input className="ev-input w-full border border-border rounded-lg" placeholder="Enter Business Place" value={form.bizPlace} onChange={(e) => update("bizPlace", e.target.value)} />
        </div>
      </div>

      <div className="mx-4 mb-6 animate-fade-in-up stagger-2">
        <div className="bg-background rounded-2xl p-4 border-2 border-ev-green-dark shadow-sm">
          <h3 className="font-bold text-sm text-foreground mb-3 px-2 py-1 bg-primary rounded-lg inline-block">Charging Details</h3>
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter Charger type" value={form.chargerType} onChange={(e) => update("chargerType", e.target.value)} />
          <input className="ev-input w-full mb-2 border border-border rounded-lg" placeholder="Enter no of chargers" value={form.numChargers} onChange={(e) => update("numChargers", e.target.value)} />
          <input className="ev-input w-full border border-border rounded-lg" placeholder="Enter Charge capacity" value={form.capacity} onChange={(e) => update("capacity", e.target.value)} />
        </div>
      </div>

      <div className="mx-4 animate-fade-in-up stagger-3">
        <button onClick={() => navigate("/slot-booked")} className="ev-btn-dark w-full">
          Submit Franchise
        </button>
      </div>
    </div>
  );
};

export default FranchisePage;
