import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { ChevronDown, ChevronUp, Bluetooth, Battery, Gauge, Thermometer, Plug, Shield, Zap, AlertTriangle } from "lucide-react";

const tips = [
  {
    icon: Bluetooth,
    title: "How to Connect Your Device via Bluetooth",
    steps: [
      "Turn on Bluetooth on your phone from Settings.",
      "Turn on your EV and enable Bluetooth pairing mode (check your EV manual).",
      "Open EV Point app → My EV → Bluetooth.",
      "Select your EV from the list of available devices.",
      "Confirm the pairing code on both devices.",
      "Once connected, you can monitor battery and ride stats in real-time."
    ]
  },
  {
    icon: Battery,
    title: "How to Make Your Battery Last Longer",
    steps: [
      "Avoid charging to 100% every time — charge up to 80-90% for daily use.",
      "Don't let the battery drain below 10% regularly.",
      "Use the manufacturer's recommended charger and cable.",
      "Avoid fast charging frequently — use standard charging for daily needs.",
      "Store your EV in shade during extreme heat.",
      "Keep tyre pressure optimal to reduce battery drain."
    ]
  },
  {
    icon: Gauge,
    title: "Safe Riding Tips for Better Range",
    steps: [
      "Maintain a steady speed — avoid sudden acceleration.",
      "Use eco mode for city riding to conserve battery.",
      "Reduce load — don't carry unnecessary weight.",
      "Plan your route to avoid steep hills when possible.",
      "Use regenerative braking if your EV supports it.",
      "Keep your EV well-maintained with regular servicing."
    ]
  },
  {
    icon: Thermometer,
    title: "Charging in Different Weather Conditions",
    steps: [
      "In hot weather: charge during cooler hours (early morning or evening).",
      "In cold weather: pre-condition the battery before charging if possible.",
      "Avoid charging immediately after a long ride — let the battery cool down.",
      "Use covered charging stations during rain.",
      "Monitor charging temperature via the app."
    ]
  },
  {
    icon: Plug,
    title: "Understanding Charger Types",
    steps: [
      "5A Socket: Standard home charging — slowest but safest for daily use.",
      "10A Socket: Faster home charging — suitable for overnight charging.",
      "15A Socket: Quick charge — good for topping up during the day.",
      "20A Socket: Fast charge — use at dedicated EV charging stations.",
      "Always match the charger type with your EV's specifications."
    ]
  },
  {
    icon: Shield,
    title: "EV Maintenance Checklist",
    steps: [
      "Check tyre pressure weekly for optimal range.",
      "Inspect brakes every 3 months.",
      "Clean battery terminals and connectors periodically.",
      "Update your EV's firmware when available.",
      "Get professional servicing every 6 months or as recommended.",
      "Keep the charging port clean and dry."
    ]
  },
  {
    icon: Zap,
    title: "Maximizing Charging Efficiency",
    steps: [
      "Charge during off-peak hours for lower electricity costs.",
      "Use scheduled charging via the EV Point app.",
      "Monitor charging progress and stop at 80-90% for battery health.",
      "Use the nearest compatible charging station to save time.",
      "Keep your charging cable in good condition."
    ]
  },
  {
    icon: AlertTriangle,
    title: "Emergency Tips",
    steps: [
      "If battery runs out: switch to the lowest power mode and ride to the nearest station.",
      "In case of unusual sounds or smells: stop immediately and contact support.",
      "Keep the EV Point helpline number saved on your phone.",
      "Always carry a portable charger for emergencies.",
      "Know your nearest service center location via the app."
    ]
  },
];

const EVTipsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="EV Tips" />

      <div className="mx-4 mb-4">
        <p className="text-sm text-muted-foreground">Expert tips to get the most out of your EV experience.</p>
      </div>

      <div className="mx-4 space-y-3">
        {tips.map((tip, i) => (
          <div key={i} className={`animate-fade-in-up stagger-${Math.min(i + 1, 6)} bg-primary/20 rounded-xl border-2 border-border overflow-hidden`}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="w-full flex items-center gap-3 p-4 text-left"
            >
              <tip.icon className="w-5 h-5 text-ev-green-dark flex-shrink-0" />
              <span className="font-semibold text-foreground flex-1 text-sm">{tip.title}</span>
              {expanded === i ? <ChevronUp className="w-4 h-4 text-foreground" /> : <ChevronDown className="w-4 h-4 text-foreground" />}
            </button>
            {expanded === i && (
              <div className="px-4 pb-4 pt-0">
                <ol className="space-y-2">
                  {tip.steps.map((step, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="font-bold text-ev-green-dark flex-shrink-0">{j + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  );
};

export default EVTipsPage;
