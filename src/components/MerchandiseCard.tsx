import { ShoppingCart} from "lucide-react";

export default function MerchandiseCard() {
    return (
      <div className="bg-black-900 rounded-xl  justify-center overflow-hidden  border-gray-800 hover:border-indigo-500 transition-all duration-300 group">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4 p-4">
            <img
              src="./front .png"
              alt="T-shirt Front"
              className="rounded-lg w-full h-50 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src="./back.png"
              alt="T-shirt Back"
              className="rounded-lg w-full h-50 object-cover transform transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">
              HackDays 3.0 Official T-Shirt
            </h3>
            <p className="text-gray-400 mb-4">
              Limited edition event t-shirt with custom design
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-indigo-400">₹399</span>
              <div className="flex gap-2">
                <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700">
                  <option>Size S</option>
                  <option>Size M</option>
                  <option>Size L</option>
                  <option>Size XL</option>
                  <option>Size XXL</option>
                </select>
              </div>
            </div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScDY-kWldzG_o17gvyvojfgihdgMK69ksC6FMaXc64VZ-8y1w/viewform?usp=header">
              <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-indigo-500/30">
                <ShoppingCart size={20} />
                Buy Now
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  }