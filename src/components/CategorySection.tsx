
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Boys Collection",
    description: "Trendy outfits for little gentlemen",
    image: "/lovable-uploads/a8ba266d-4f98-4e0a-93d0-44292887e547.png",
    color: "bg-blue-100",
    textColor: "text-blue-600"
  },
  {
    title: "Casual Wear", 
    description: "Comfortable styles for everyday play",
    image: "/lovable-uploads/0b49df47-4aa8-4daa-ae02-e0b1c8114963.png",
    color: "bg-pink-100",
    textColor: "text-pink-600"
  },
  {
    title: "Summer Collection",
    description: "Bright & colorful for sunny days",
    image: "/lovable-uploads/95cd674f-d543-4f25-befd-859f2fdca533.png",
    color: "bg-yellow-100",
    textColor: "text-yellow-600"
  },
  {
    title: "Active Wear",
    description: "Sporty designs for active kids",
    image: "/lovable-uploads/8ead0be4-f318-48d3-bb96-66b7c7a804fb.png",
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
                    className="w-full h-full object-cover object-center transition-transform group-hover:scale-110"
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
