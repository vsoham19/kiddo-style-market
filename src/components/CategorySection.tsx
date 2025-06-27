
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Ras Malai 1",
    description: "Bright & colorful for sunny days",
    image: "/lovable-uploads/95cd674f-d543-4f25-befd-859f2fdca533.png",
    color: "bg-yellow-100",
    textColor: "text-yellow-600",
    pdfUrl: "https://drive.google.com/file/d/1IxG9AeqLa3n-bgaWkySRG5-FFJZfR0tu/view?usp=drive_link"
  },
  {
    title: "Ras Malai 2", 
    description: "Comfortable styles for everyday play",
    image: "/lovable-uploads/0b49df47-4aa8-4daa-ae02-e0b1c8114963.png",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    pdfUrl: "https://drive.google.com/file/d/1ySjU-7_7w6giCHMTdQ2nW39IH8Al0g-n/view?usp=drive_link"
  },
  {
    title: "Ras Malai 3",
    description: "Sporty designs for active kids",
    image: "/lovable-uploads/8ead0be4-f318-48d3-bb96-66b7c7a804fb.png",
    color: "bg-orange-100",
    textColor: "text-orange-600",
    pdfUrl: "https://drive.google.com/file/d/1hMaAYBiXzjJjBm-cMdIBfVCkTAReFN1O/view?usp=drive_link"
  }
];

const MultiColorTitle = ({ title }: { title: string }) => {
  const colors = [
    'text-red-500',
    'text-blue-500', 
    'text-green-500',
    'text-purple-500',
    'text-pink-500',
    'text-orange-500',
    'text-indigo-500',
    'text-yellow-500',
    'text-teal-500',
    'text-cyan-500'
  ];

  return (
    <h3 className="text-xl font-bold mb-2">
      {title.split('').map((char, index) => (
        <span 
          key={index} 
          className={char === ' ' ? '' : colors[index % colors.length]}
        >
          {char}
        </span>
      ))}
    </h3>
  );
};

export const CategorySection = () => {
  const handleCategoryClick = (category: any) => {
    if (category.pdfUrl) {
      window.open(category.pdfUrl, '_blank');
    }
  };

  return (
    <section className="py-20 bg-white collections-section">
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
                <div className="h-80 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-full object-cover object-top transition-transform group-hover:scale-110"
                  />
                </div>
                <div className={`${category.color} p-6 text-center`}>
                  <MultiColorTitle title={category.title} />
                  <p className="text-gray-600 text-sm mb-4">
                    {category.description}
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => handleCategoryClick(category)}
                  >
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
