
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-pink-500 text-white text-center py-2 text-sm">
        Premium Kids Fashion Portfolio | Contact us for custom designs
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600">KiddoStyle</h1>
            <p className="text-xs text-gray-500">Kids Fashion Portfolio</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Gallery</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Collections</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Contact</a>
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 9876543210</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span className="text-sm">Contact</span>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Gallery</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Collections</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
