import Navbar from "./Navbar";


const Brochure: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[rgb(10,20,50)] to-[rgb(3,7,18)] text-white">
            <Navbar />
            <div className="relative w-80 p-4 bg-gray-100 text-black rounded-2xl shadow-2xl transform transition-transform hover:scale-105 mt-20">
                {/* University Logo */}
                <div className="flex justify-between items-center">
                    <h1 className="text-xl font-bold">G</h1>
                    <h1 className="text-xl font-bold">AUHATI UNIVERSITY</h1>
                    <img src="https://upload.wikimedia.org/wikipedia/en/7/78/Gauhati_University_Logo.jpeg" alt="University Logo" className="w-10 h-10" />
                </div>
                
                {/* First Image */}
                <div className="mt-3">
                    <img src="https://i.imgur.com/WGoDKtD.jpeg" alt="University Gate" className="rounded-lg shadow-lg" />
                </div>
                
                {/* Brochure Label */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white px-3 py-1 rounded-full shadow-md rotate-90 font-semibold">
                    BROCHURE
                </div>
                
                {/* Second Image */}
                <div className="mt-3">
                    <img src="https://i.imgur.com/WVx2DB4.jpeg" alt="University Building" className="rounded-lg shadow-lg" />
                </div>
                
                {/* Event Details */}
                <div className="mt-4 text-center">
                    <h4 className="text-lg font-monoton">DEPARTMENT OF INFORMATION TECHNOLOGY</h4>
                    <h1 className="text-2xl font-brick">HACKDAYS 3.0</h1>
                    <p className="text-sm">19, 20 & 21 March 2025</p>
                </div>
                
                {/* Social Media Links */}
                <div className="mt-4 flex justify-center space-x-4">
                    <p className="text-sm">🌐 hackdays.tech</p>
                    <p className="text-sm">📷 _hackdays_</p>
                </div>
            </div>
        </div>
    );
};

export default Brochure;
