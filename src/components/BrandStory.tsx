
import { Button } from "@/components/ui/button";

export const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
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
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
            Learn More About Us
          </Button>
        </div>
      </div>
    </section>
  );
};
