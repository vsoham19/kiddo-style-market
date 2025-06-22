
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Rainbow Unicorn Dress",
    price: "₹1,299",
    originalPrice: "₹1,899",
    rating: 4.8,
    reviews: 124,
    image: "👗",
    badge: "New Arrival"
  },
  {
    id: 2,
    name: "Superhero T-Shirt",
    price: "₹699",
    originalPrice: "₹999",
    rating: 4.9,
    reviews: 89,
    image: "👕",
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "Comfy Baby Romper",
    price: "₹899",
    originalPrice: "₹1,199",
    rating: 4.7,
    reviews: 156,
    image: "👶",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Denim Overalls",
    price: "₹1,599",
    originalPrice: "₹2,199",
    rating: 4.6,
    reviews: 67,
    image: "👖",
    badge: "Limited"
  },
  {
    id: 5,
    name: "Princess Party Frock",
    price: "₹1,799",
    originalPrice: "₹2,499",
    rating: 4.9,
    reviews: 203,
    image: "👗",
    badge: "Premium"
  },
  {
    id: 6,
    name: "Cool Summer Shorts",
    price: "₹599",
    originalPrice: "₹899",
    rating: 4.5,
    reviews: 91,
    image: "🩳",
    badge: "Hot Deal"
  }
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hand-picked favorites that kids and parents absolutely love
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-pink-100 to-purple-100 h-64 flex items-center justify-center text-8xl">
                  {product.image}
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {product.badge}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="absolute top-4 right-4 bg-white hover:bg-gray-100 rounded-full p-2"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-900 mb-2 group-hover:text-pink-600 transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};
