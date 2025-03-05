import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import EventCard from "./components/EventCard";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
