
import { Button } from "@/components/ui/button";
import { Eye, Heart } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    name: "Rainbow Unicorn Dress",
    category: "Girls Collection",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop",
    description: "Whimsical design with vibrant colors"
  },
  {
    id: 2,
    name: "Superhero Adventure Set",
    category: "Boys Collection", 
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop",
    description: "Bold graphics and comfortable fit"
  },
  {
    id: 3,
    name: "Comfy Baby Romper",
    category: "Baby Essentials",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=400&fit=crop",
    description: "Soft cotton blend for delicate skin"
  },
  {
    id: 4,
    name: "Denim Adventure Overalls",
    category: "Unisex Collection",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop",
    description: "Durable design for active kids"
  },
  {
    id: 5,
    name: "Princess Party Ensemble",
    category: "Special Occasions",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=400&fit=crop",
    description: "Elegant design for memorable moments"
  },
  {
    id: 6,
    name: "Summer Breeze Collection",
    category: "Seasonal Wear",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop",
    description: "Light and airy for warm weather"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Designs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our most loved and innovative children's fashion designs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="bg-white hover:bg-gray-100 rounded-full p-2"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="bg-white hover:bg-gray-100 rounded-full p-2"
                  >
                    <Eye className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4">
                  {item.description}
                </p>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View Full Portfolio
          </Button>
        </div>
      </div>
    </section>
  );
};
