import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import EventCard from "./components/Utils/EventCard";
import Events from "./components/Utils/Events";
import Hackathon from "./components/Events/Hackathon";
import BugBounty from "./components/Events/BugBounty";
import Quiz from "./components/Events/Quiz";
import TypingSpeed from "./components/Events/TypingSpeed";
import IPLAuction from "./components/Events/IPLAuction";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import Merch from "./pages/Merch";
import ContactUs from "./pages/ContactUs";
import ChessTournament from "./components/Events/ChessTournament";
import Codegem from "./components/Events/Codegem";
import Esports from "./components/Events/Esports";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/register" element={<EventCard />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/merch" element={<Merch />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/hackathon" element={<Hackathon />} />
        <Route path="/events/bug-bounty" element={<BugBounty />} />
        <Route path="/events/quiz" element={<Quiz />} />
        <Route path="/events/typing-speed" element={<TypingSpeed />} />
        <Route path="/events/ipl-auction" element={<IPLAuction />} />
        <Route path="/events/chess-tournament" element={<ChessTournament />} />
        <Route path="/events/codegem" element={<Codegem />} />
        <Route path="/events/esports" element={<Esports />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
