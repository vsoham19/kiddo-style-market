
import { useState } from "react";
import { Search, ShoppingCart, Menu, X, User, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-pink-500 text-white text-center py-2 text-sm">
        Free shipping on orders above ₹999 | Use code: KIDDO20 for 20% off
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-pink-600">KiddoStyle</h1>
            <p className="text-xs text-gray-500">Kids Fashion Store</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Boys</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Girls</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Baby</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Accessories</a>
            <a href="#" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">Sale</a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Search className="w-4 h-4 text-gray-500 mr-2" />
              <input 
                type="text" 
                placeholder="Search for products..." 
                className="bg-transparent outline-none text-sm w-64"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <User className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="hidden md:flex">
                <Heart className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
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
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                <Search className="w-4 h-4 text-gray-500 mr-2" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent outline-none text-sm flex-1"
                />
              </div>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Boys</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Girls</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Baby</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Accessories</a>
              <a href="#" className="text-gray-700 hover:text-pink-600 font-medium">Sale</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
