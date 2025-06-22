
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Boys Collection",
    description: "Trendy outfits for little gentlemen",
    emoji: "👦",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    title: "Girls Collection", 
    description: "Pretty dresses for little princesses",
    emoji: "👧",
    color: "bg-pink-100",
    textColor: "text-pink-600"
  },
  {
    title: "Baby Essentials",
    description: "Soft & comfortable for tiny tots",
    emoji: "👶",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    title: "Accessories",
    description: "Complete the look with cute accessories",
    emoji: "🎀",
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
            Shop by Category
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our carefully curated collections designed for every age and style
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className={`${category.color} rounded-3xl p-8 text-center h-64 flex flex-col justify-center items-center transition-all group-hover:shadow-xl`}>
                <div className="text-6xl mb-4 transform transition-transform group-hover:scale-110">
                  {category.emoji}
                </div>
                <h3 className={`text-xl font-bold ${category.textColor} mb-2`}>
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <Button variant="outline" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
