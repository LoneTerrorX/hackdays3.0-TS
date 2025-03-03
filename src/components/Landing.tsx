import React from "react";
import Hero from "./Hero";
import Events from "./Events";
import Sponsors from "./Sponsors";
import Posters from "./Posters";

import Messages from "./Messages";
import Feedback from "./Feedback";
import Footer from "./Footer";
import MerchandiseCard from "./MerchandiseCard";

const Landing = () => {
  
  return (
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <Events />
      <Posters />
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16 animate-text-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-800 to-purple-500">
              Official Merchandise
            </span>
          </h2>
          <div className="max-w-2xl mx-auto">
            <MerchandiseCard />
          </div>
        </div>
      </section>

      <Sponsors />
      <Messages />
      <Feedback />
      <Footer />
    </div>
  );
};

export default Landing;
