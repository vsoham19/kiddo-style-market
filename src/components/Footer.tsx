
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const handlePhoneClick = () => {
    const phoneNumber = "+91 7490973782";
    if (confirm(`Call ${phoneNumber}?`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:kiddostyle14@gmail.com";
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-orange-400 mb-4">KiddoStyle</h2>
              <p className="text-gray-400 mb-6">
                Creating beautiful, comfortable, and stylish fashion for children with love and creativity.
              </p>
              <div className="mb-6">
                <p className="text-gray-400 mb-2">Engage with us</p>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-400 hover:text-white p-2"
                  onClick={() => window.open('https://www.instagram.com/kiddostyle.in?igsh=MXVveGR2a3pyb24wag==', '_blank')}
                >
                  <Instagram className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center cursor-pointer hover:text-white transition-colors" onClick={handlePhoneClick}>
                  <Phone className="w-4 h-4 mr-3" />
                  <span>+91 7490973782</span>
                </div>
                <div className="flex items-center cursor-pointer hover:text-white transition-colors" onClick={handleEmailClick}>
                  <Mail className="w-4 h-4 mr-3" />
                  <span>kiddostyle14@gmail.com</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-4 h-4 mr-3 mt-1" />
                  <span>NILKANTH LIFESTYLE,<br />Old Rajkot highway, near Javer Print,<br />Ghetavada Plot, Jetpur,<br />Rajkot 360370</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <p className="text-gray-400 text-sm mb-2">
              © 2024 KiddoStyle Portfolio. All rights reserved.
            </p>
            <div>
              <span className="text-gray-400 text-sm">Developed by </span>
              <a 
                href="https://www.linkedin.com/in/soham-vaghasia-45139325b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors cursor-pointer text-sm"
              >
                Soham Vaghasia
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
