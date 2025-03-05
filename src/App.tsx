import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Landing from "./components/Landing";
import EventShowcase from "./components/EventCard";

/**
 * Component to handle Google Analytics page tracking on route changes
 */
const AnalyticsHandler = () => {
  const location = useLocation();

  useEffect(() => {
    sendPageView(location.pathname);
  }, [location]);

  return null; // This component doesn't render anything
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventShowcase />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
