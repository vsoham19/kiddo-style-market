import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToCollections = () => {
    const collectionsSection = document.querySelector('.collections-section');
    if (collectionsSection) {
      collectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const showContactPopup = () => {
    const phoneNumber = "+91 7490973782";
    if (confirm(`Call ${phoneNumber}?`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-orange-500 text-white text-center py-2 text-sm">
        Premium Kids Fashion Portfolio
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/lovable-uploads/6cc884dd-d46c-4655-b34f-54305f8607d9.png" 
              alt="Logo" 
              className="h-12 w-auto cursor-pointer"
              onClick={scrollToTop}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={scrollToTop}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={scrollToCollections}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={showContactPopup}
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Contact
            </button>
          </nav>

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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={scrollToTop}
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={scrollToCollections}
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Collections
              </button>
              <button 
                onClick={showContactPopup}
                className="text-gray-700 hover:text-orange-600 font-medium text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
