import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CategorySelector from "@/components/CategorySelector";
import ReviewsSection from "@/components/ReviewsSection";
import SpecialOffer from "@/components/SpecialOffer";
import ComboDeals from "@/components/ComboDeals";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import { oudChips, oudOils } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CategorySelector />
        <ReviewsSection />
        <SpecialOffer />
        <div id="combos">
          <ComboDeals />
        </div>
        <div id="oils">
          <ProductSection
            title="Premium Oud Oils"
            description="Experience the finest collection of authentic oud perfume oils, masterfully crafted for the discerning connoisseur"
            products={oudOils}
            bgColor="bg-background"
          />
        </div>
        <div id="chips">
          <ProductSection
            title="Exquisite Oud Chips"
            description="Rare and precious agarwood incense chips from the most sought-after sources"
            products={oudChips}
            bgColor="bg-card"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
