import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    name: "Ahmed Al-Rashid",
    nameArabic: "أحمد الراشد",
    rating: 5,
    comment:
      "The Suyufi Ameeri is absolutely divine! Worth every dirham. The aroma is rich and long-lasting.",
    product: "Suyufi Ameeri Chips",
    location: "Dubai, UAE",
  },
  {
    name: "Fatima Hassan",
    nameArabic: "فاطمة حسن",
    rating: 5,
    comment:
      "Maliki oil exceeded all expectations. The quality is unmatched. My favorite perfume now!",
    product: "Maliki Oil",
    location: "Abu Dhabi, UAE",
  },
  {
    name: "Mohammed Zayed",
    nameArabic: "محمد زايد",
    rating: 5,
    comment:
      "The combo deal is perfect for gifting. Beautifully packaged and authentic quality oud.",
    product: "Experience Set",
    location: "Sharjah, UAE",
  },
  {
    name: "Layla Ibrahim",
    nameArabic: "ليلى إبراهيم",
    rating: 5,
    comment:
      "Girmeet Grade 1 is pure luxury. The scent fills the entire home beautifully.",
    product: "Girmeet Grade 1",
    location: "Riyadh, KSA",
  },
  {
    name: "Omar Abdullah",
    nameArabic: "عمر عبدالله",
    rating: 5,
    comment:
      "Outstanding service and premium quality. The Ameeri oil is authentic and powerful.",
    product: "Ameeri Oil",
    location: "Doha, Qatar",
  },
];

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + reviews.length) % reviews.length;
    const totalCards = reviews.length;

    // Center card
    if (diff === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 30,
        filter: "brightness(1)",
      };
    }
    // Right side cards
    else if (diff === 1) {
      return {
        transform: "translateX(85%) scale(0.85) rotateY(-25deg)",
        opacity: 0.7,
        zIndex: 20,
        filter: "brightness(0.8)",
      };
    } else if (diff === 2) {
      return {
        transform: "translateX(170%) scale(0.75) rotateY(-35deg)",
        opacity: 0.5,
        zIndex: 10,
        filter: "brightness(0.6)",
      };
    }
    // Left side cards
    else if (diff === totalCards - 1) {
      return {
        transform: "translateX(-85%) scale(0.85) rotateY(25deg)",
        opacity: 0.7,
        zIndex: 20,
        filter: "brightness(0.8)",
      };
    } else if (diff === totalCards - 2) {
      return {
        transform: "translateX(-170%) scale(0.75) rotateY(35deg)",
        opacity: 0.5,
        zIndex: 10,
        filter: "brightness(0.6)",
      };
    }
    // Hidden cards
    return {
      transform: "translateX(0%) scale(0.5)",
      opacity: 0,
      zIndex: 0,
      filter: "brightness(0.5)",
    };
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary via-background to-secondary overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-4">
            <Badge className="bg-primary/10 text-black border-primary/20 px-4 py-1">
              Testimonials
            </Badge>
          </div>
          <p className="font-script text-5xl md:text-6xl text-primary mb-3">
            Customer Stories
          </p>
          <div className="layered-heading mb-4">
            <span className="layered-heading-bg text-[8rem] md:text-[12rem]">
              Reviews
            </span>
            <h2 className="layered-heading-fg text-4xl md:text-5xl font-bold font-serif">
              HEAR FROM OUR CLIENTS
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the luxury through the eyes of our satisfied customers
          </p>
        </div>

        {/* 3D Carousel Container */}
        <div className="relative h-[600px] mb-12">
          {/* Perspective container */}
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ perspective: "2000px" }}
          >
            {/* Cards */}
            {reviews.map((review, index) => {
              const style = getCardStyle(index);
              const isCenter =
                (index - currentIndex + reviews.length) % reviews.length === 0;

              return (
                <div
                  key={index}
                  className="absolute w-full max-w-md transition-all duration-700 ease-out"
                  style={{
                    ...style,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  <div
                    className={`bg-card rounded-3xl overflow-hidden shadow-2xl ${
                      isCenter ? "ring-2 ring-primary/50" : ""
                    }`}
                    style={{
                      height: "550px",
                      boxShadow: isCenter
                        ? "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                        : "0 10px 30px -5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Video/Image Placeholder */}
                    <div className="relative h-[400px] bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 overflow-hidden">
                      {/* Decorative overlay */}
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent"
                        style={{
                          background:
                            "linear-gradient(180deg, rgb(28, 28, 28) 0%, rgba(28, 28, 28, 0) 40%)",
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full flex flex-col justify-between p-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-xl font-bold text-white mb-1 font-serif">
                              {review.name}
                            </h4>
                            <p className="text-white/70 text-sm font-arabic">
                              {review.nameArabic}
                            </p>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-amber-400 text-amber-400"
                              />
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-center flex-1">
                          <div className="w-24 h-24 rounded-full bg-primary/30 backdrop-blur-sm flex items-center justify-center">
                            <Star className="w-12 h-12 text-primary fill-primary/60" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="p-6 bg-card">
                      <p className="text-card-foreground/90 italic mb-4 line-clamp-3">
                        "{review.comment}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-primary">
                            {review.product}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {review.location}
                          </p>
                        </div>
                        <Badge
                          variant="outline"
                          className="font-script text-base"
                        >
                          Verified
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute  left-1/2 -translate-x-1/2 flex gap-4 z-40">
            <Button
              onClick={prevSlide}
              disabled={isAnimating}
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-glow shadow-lg disabled:opacity-50"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              onClick={nextSlide}
              disabled={isAnimating}
              size="icon"
              className="w-12 h-12 rounded-full bg-primary hover:bg-primary-glow shadow-lg disabled:opacity-50"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-14">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(index);
                  setTimeout(() => setIsAnimating(false), 600);
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Join thousands of satisfied customers • Authentic luxury fragrances
            • Premium quality guaranteed
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
