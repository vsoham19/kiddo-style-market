
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Boys Collection",
    description: "Trendy outfits for little gentlemen",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    title: "Girls Collection", 
    description: "Pretty dresses for little princesses",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=300&fit=crop",
    color: "bg-pink-100",
    textColor: "text-pink-600"
  },
  {
    title: "Baby Essentials",
    description: "Soft & comfortable for tiny tots",
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=300&fit=crop",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    title: "Accessories",
    description: "Complete the look with cute accessories",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    color: "bg-purple-100",
    textColor: "text-purple-600"
  }
];

export const CategorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Design Collections
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated design portfolios for every age and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg transition-all group-hover:shadow-xl">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className={`${category.color} p-6 text-center`}>
                  <h3 className={`text-xl font-bold ${category.textColor} mb-2`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                    View Gallery
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
