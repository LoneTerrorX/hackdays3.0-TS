import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import EventShowcase from "./components/EventCard";
import Brochure from "./components/brochure";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventShowcase />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
