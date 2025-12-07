import { Instagram } from "lucide-react";
import logo from "@assets/mm_logo_cropped_1765126657121.PNG";

export function Footer() {
  return (
    <footer className="bg-[#F7F6F2] text-[#644716] py-16 border-t border-[#644716]/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={logo} alt="Mac & Meadow" className="w-32 opacity-90" />
            <p className="text-sm opacity-80 max-w-xs text-center md:text-left font-light">
              Natural, healing skincare for skin, home, and heart.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center space-y-2">
            <h4 className="font-serif text-lg mb-2">Navigation</h4>
            <a href="#home" className="hover:text-[#A2A77F] transition-colors text-sm">Home</a>
            <a href="#products" className="hover:text-[#A2A77F] transition-colors text-sm">Shop</a>
            <a href="#about" className="hover:text-[#A2A77F] transition-colors text-sm">About</a>
            <a href="#benefits" className="hover:text-[#A2A77F] transition-colors text-sm">Why Tallow?</a>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="font-serif text-lg">Connect With Us</h4>
            <a 
              href="https://www.instagram.com/macandmeadowco?igsh=Ym85aG12OGc2M2Uw" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#644716] text-[#F7F6F2] p-3 rounded-full hover:bg-[#A2A77F] hover:text-white transition-all duration-300"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <p className="text-xs opacity-60">© {new Date().getFullYear()} Mac & Meadow. All rights reserved.</p>
            <a 
              href="https://elevategrowth.solutions" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs opacity-40 hover:opacity-80 transition-opacity hover:text-[#BC7C5F]"
            >
              Designed by Elevate Growth Solutions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
