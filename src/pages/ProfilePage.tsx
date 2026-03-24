import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { Pencil, Check } from "lucide-react";

const ProfilePage: React.FC = () => {
  const [editing, setEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@email.com",
    dob: "1995-06-15",
    city: "Hyderabad",
    evModel: "OLA S1 Pro",
    licensePlate: "TS 09 AB 1234",
  });

  const update = (key: string, val: string) => setProfile((p) => ({ ...p, [key]: val }));

  const fields = [
    { key: "name", label: "Full Name", type: "text" },
    { key: "phone", label: "Phone Number", type: "tel" },
    { key: "email", label: "Email", type: "email" },
    { key: "dob", label: "Date of Birth", type: "date" },
    { key: "city", label: "City", type: "text" },
    { key: "evModel", label: "EV Model", type: "text" },
    { key: "licensePlate", label: "License Plate", type: "text" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Profile" />

      <div className="mx-4 mb-4 flex justify-end">
        <button
          onClick={() => setEditing(!editing)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary border-2 border-border text-foreground font-medium text-sm transition-all active:scale-95"
        >
          {editing ? <Check className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
          {editing ? "Save" : "Edit"}
        </button>
      </div>

      <div className="mx-4 space-y-3">
        {fields.map((f, i) => (
          <div key={f.key} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)} bg-primary/20 rounded-xl p-4 border-2 border-border`}>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">{f.label}</label>
            {editing ? (
              <input
                type={f.type}
                value={profile[f.key as keyof typeof profile]}
                onChange={(e) => update(f.key, e.target.value)}
                className="ev-input w-full text-foreground font-semibold"
              />
            ) : (
              <p className="text-foreground font-semibold text-lg">{profile[f.key as keyof typeof profile]}</p>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default ProfilePage;
