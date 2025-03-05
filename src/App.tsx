import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import EventCard from "./components/EventCard";
import Brochure from "./components/Brochure";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventCard />} />
        <Route path="/brochure" element={<Brochure />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
