import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-oud.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Luxury Oud Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-8 py-20">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="layered-heading mb-6">
            <span className="layered-heading-bg text-[10rem] md:text-[14rem] lg:text-[18rem]">Oudhee</span>
            <h1 className="layered-heading-fg text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground leading-tight font-serif text-center">
              Discover Luxury Oud
            </h1>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90 max-w-2xl font-sans">
            Experience the finest collection of premium oud perfume oils and incense chips from the heart of Arabia.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="group bg-primary hover:bg-primary-glow text-lg px-8 py-6 golden-glow">
              Explore Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary text-primary-foreground bg-secondary/50 hover:bg-primary hover:text-primary-foreground backdrop-blur-sm"
            >
              View Special Offers
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
