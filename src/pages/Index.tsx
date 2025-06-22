
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CategorySection } from "@/components/CategorySection";
import { BrandStory } from "@/components/BrandStory";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <CategorySection />
      <BrandStory />
      <Footer />
    </div>
  );
};

export default Index;
