import React, { useState } from "react";
import PageHeader from "@/components/PageHeader";
import BottomNav from "@/components/BottomNav";
import { useTheme } from "@/contexts/ThemeContext";
import { Sun, Moon, Globe, Bell, Shield, Info } from "lucide-react";

const languages = ["English", "Hindi", "Telugu", "Tamil", "Kannada", "Marathi"];

const SettingsPage: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [language, setLanguage] = useState("English");
  const [notifications, setNotifications] = useState(true);
  const [locationAccess, setLocationAccess] = useState(true);

  return (
    <div className="min-h-screen bg-background pb-20">
      <PageHeader title="Settings" />

      <div className="mx-4 space-y-4">
        {/* Theme */}
        <div className="animate-fade-in-up bg-primary/20 rounded-xl p-4 border-2 border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {theme === "light" ? <Sun className="w-5 h-5 text-foreground" /> : <Moon className="w-5 h-5 text-foreground" />}
              <div>
                <p className="font-semibold text-foreground">Theme</p>
                <p className="text-xs text-muted-foreground">{theme === "light" ? "Light Mode" : "Dark Mode"}</p>
              </div>
            </div>
            <button
              onClick={toggleTheme}
              className={`w-14 h-7 rounded-full transition-all relative ${theme === "dark" ? "bg-ev-green-dark" : "bg-muted"}`}
            >
              <div className={`w-5 h-5 bg-background rounded-full absolute top-1 transition-all ${theme === "dark" ? "right-1" : "left-1"}`} />
            </button>
          </div>
        </div>

        {/* Language */}
        <div className="animate-fade-in-up stagger-1 bg-primary/20 rounded-xl p-4 border-2 border-border">
          <div className="flex items-center gap-3 mb-3">
            <Globe className="w-5 h-5 text-foreground" />
            <p className="font-semibold text-foreground">Language</p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                  language === lang ? "border-ev-green-dark bg-primary text-foreground" : "border-border bg-background text-muted-foreground"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Notifications */}
        <div className="animate-fade-in-up stagger-2 bg-primary/20 rounded-xl p-4 border-2 border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-foreground" />
              <p className="font-semibold text-foreground">Notifications</p>
            </div>
            <button
              onClick={() => setNotifications(!notifications)}
              className={`w-14 h-7 rounded-full transition-all relative ${notifications ? "bg-ev-green-dark" : "bg-muted"}`}
            >
              <div className={`w-5 h-5 bg-background rounded-full absolute top-1 transition-all ${notifications ? "right-1" : "left-1"}`} />
            </button>
          </div>
        </div>

        {/* Location */}
        <div className="animate-fade-in-up stagger-3 bg-primary/20 rounded-xl p-4 border-2 border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-foreground" />
              <p className="font-semibold text-foreground">Location Access</p>
            </div>
            <button
              onClick={() => setLocationAccess(!locationAccess)}
              className={`w-14 h-7 rounded-full transition-all relative ${locationAccess ? "bg-ev-green-dark" : "bg-muted"}`}
            >
              <div className={`w-5 h-5 bg-background rounded-full absolute top-1 transition-all ${locationAccess ? "right-1" : "left-1"}`} />
            </button>
          </div>
        </div>

        {/* About */}
        <div className="animate-fade-in-up stagger-4 bg-primary/20 rounded-xl p-4 border-2 border-border">
          <div className="flex items-center gap-3">
            <Info className="w-5 h-5 text-foreground" />
            <div>
              <p className="font-semibold text-foreground">About EV Point</p>
              <p className="text-xs text-muted-foreground">Version 1.0.0 • Made in Bharat</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default SettingsPage;
