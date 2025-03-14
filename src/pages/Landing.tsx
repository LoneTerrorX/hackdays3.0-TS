import Hero from "../components/Hero/Hero";
import Events from "../components/Utils/Events";
import Sponsors from "../components/Sponsors/Sponsors";
// import Posters from "./Posters";

import Messages from "../components/Messages";
import Feedback from "./Feedback";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Events />
      <Sponsors />
      {/* <Posters /> */}
      <Messages />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Landing;
