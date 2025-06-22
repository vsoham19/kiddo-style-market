
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Crafting Style for 
              <span className="text-pink-600"> Little Ones</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Explore our premium portfolio of comfortable, stylish, and adorable clothing 
              designs created specially for kids who love to play, explore, and shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3">
                View Portfolio
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                Get in Touch
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-pink-200 rounded-full w-80 h-80 mx-auto flex items-center justify-center overflow-hidden">
              <img 
                src="/lovable-uploads/ae4ca745-3b0e-450b-a4ca-a3c1fba96fd6.png" 
                alt="Cute kid modeling" 
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute top-10 left-10 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center text-2xl animate-bounce">
              ⭐
            </div>
            <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-xl animate-pulse">
              🎈
            </div>
            <div className="absolute top-20 right-0 w-14 h-14 bg-green-200 rounded-full flex items-center justify-center text-xl animate-bounce delay-1000">
              🌈
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
