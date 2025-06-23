
import { Button } from "@/components/ui/button";
import { Shield, Heart, Truck, RotateCcw } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium fabrics that are gentle on delicate skin"
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every piece is crafted with care and attention to detail"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and safe delivery to your doorstep"
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days"
  }
];

export const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At KiddoStyle, we believe every child deserves to feel confident, comfortable, 
              and stylish. Founded by parents who understand the importance of quality 
              clothing for growing kids, we curate collections that blend fashion with functionality.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              From playtime adventures to special occasions, our carefully selected range 
              ensures your little ones are always dressed to impress while feeling free to be themselves.
            </p>
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
              Learn More About Us
            </Button>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-teal-50 transition-colors">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-teal-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
