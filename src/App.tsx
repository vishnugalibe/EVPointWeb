import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import SplashScreen from "./pages/SplashScreen";
import LoginPage from "./pages/LoginPage";
import OTPPage from "./pages/OTPPage";
import PermissionsPage from "./pages/PermissionsPage";
import HomePage from "./pages/HomePage";
import ServiceCenterPage from "./pages/ServiceCenterPage";
import HistoryPage from "./pages/HistoryPage";
import MyEVPage from "./pages/MyEVPage";
import BookChargingPage from "./pages/BookChargingPage";
import BookServicePage from "./pages/BookServicePage";
import FranchisePage from "./pages/FranchisePage";
import SlotBookedPage from "./pages/SlotBookedPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import EVTipsPage from "./pages/EVTipsPage";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="max-w-lg mx-auto min-h-screen bg-background relative shadow-2xl">
            <Routes>
              <Route path="/" element={<SplashScreen />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/otp" element={<OTPPage />} />
              <Route path="/permissions" element={<PermissionsPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/service-center" element={<ServiceCenterPage />} />
              <Route path="/history" element={<HistoryPage />} />
              <Route path="/my-ev" element={<MyEVPage />} />
              <Route path="/book-charging" element={<BookChargingPage />} />
              <Route path="/book-service" element={<BookServicePage />} />
              <Route path="/franchise" element={<FranchisePage />} />
              <Route path="/slot-booked" element={<SlotBookedPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/help" element={<HelpPage />} />
              <Route path="/ev-tips" element={<EVTipsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
