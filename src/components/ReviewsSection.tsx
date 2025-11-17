import {
  Star,
  ChevronLeft,
  ChevronRight,
  Users,
  ThumbsUp,
  Award,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import luxuryBg from "@/assets/luxury-bg.jpg";
import { videoReviews as initialVideoReviews } from "@/data/products";

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
interface Review {
  id: number;
  name: string;
  nameArabic: string;
  product: string;
  rating: number;
  helpful: number;
  verified: boolean;
  location: string;
  comment: string;
  video?: string;
  avatar: string;
  date: string;
  productImage?: string;
}
const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [videoReviews, setVideoReviews] =
    useState<Review[]>(initialVideoReviews);
  // At the top, add this hook to detect mobile
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stats = [
    {
      icon: <Star className="w-6 h-6" />,
      value: "4.9",
      label: "Average Rating",
    },
    {
      icon: <Users className="w-6 h-6" />,
      value: "10,000+",
      label: "Happy Customers",
    },
    {
      icon: <ThumbsUp className="w-6 h-6" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
    {
      icon: <Award className="w-6 h-6" />,
      value: "5,000+",
      label: "5-Star Reviews",
    },
  ];

  const nextVideo = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentVideoIndex((prev) => (prev + 1) % videoReviews.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevVideo = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentVideoIndex(
      (prev) => (prev - 1 + videoReviews.length) % videoReviews.length
    );
    setTimeout(() => setIsAnimating(false), 600);
  };

  const getYouTubeEmbedURL = (url?: string) => {
    if (!url) return "";
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match
      ? `https://www.youtube.com/embed/${match[1]}?autoplay=0&controls=1`
      : "";
  };

  // 3D Carousel Style Function
  const getVideoCardStyle = (index: number) => {
    const diff =
      (index - currentVideoIndex + videoReviews.length) % videoReviews.length;
    const totalCards = videoReviews.length;

    if (diff === 0) {
      return {
        transform: "translateX(0%) scale(1) rotateY(0deg)",
        opacity: 1,
        zIndex: 30,
        filter: "brightness(1)",
      };
    } else if (diff === 1) {
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
    } else if (diff === totalCards - 1) {
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
    return {
      transform: "translateX(0%) scale(0.5)",
      opacity: 0,
      zIndex: 0,
      filter: "brightness(0.5)",
    };
  };

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
        <div className=" relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `url(${luxuryBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="container mx-auto px-4 relative z-10">
            {/* Mobile vertical scroll */}
            {isMobile && (
              <div className="md:hidden flex flex-col gap-6 overflow-y-auto h-screen snap-y snap-mandatory px-4">
                {videoReviews.map((review) => (
                  <div
                    key={review.id}
                    className="snap-start w-full max-w-xs mx-auto h-[90vh] relative bg-black flex-shrink-0 rounded-2xl overflow-hidden"
                  >
                    {review.video ? (
                      review.video.includes("youtube.com") ||
                      review.video.includes("youtu.be") ? (
                        <iframe
                          src={getYouTubeEmbedURL(review.video)}
                          title={review.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-3xl"
                        />
                      ) : (
                        <video
                          src={review.video}
                          controls
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      )
                    ) : (
                      <div className="flex items-center justify-center w-full h-full bg-black/50 text-white">
                        No video available
                      </div>
                    )}

                    {/* Overlay info */}
                    <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold">
                          {review.avatar}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="font-bold text-lg flex items-center gap-2">
                            {review.name}
                            {/* Small perfume image */}
                            <img
                              src={review.productImage}
                              alt={review.product}
                              className="w-6 h-6 rounded-full object-cover"
                            />
                            {/* Buy Now button */}
                          </h3>
                          <p className="text-sm font-arabic">
                            {review.nameArabic}{" "}
                            <button className="ml-2 px-3 py-1 bg-primary text-white text-xs rounded-full hover:scale-105 transition-transform">
                              Buy Now
                            </button>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 mb-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <p className="text-sm line-clamp-2">"{review.comment}"</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Desktop 3D carousel */}
            {!isMobile && (
              <div
                className="relative h-[700px] flex items-center justify-center"
                style={{ perspective: "1500px" }}
              >
                {videoReviews.map((review, index) => {
                  const style = getVideoCardStyle(index);
                  const isCenter =
                    (index - currentVideoIndex + videoReviews.length) %
                      videoReviews.length ===
                    0;

                  return (
                    <div
                      key={review.id}
                      className="absolute transition-all duration-700 ease-out w-full max-w-sm"
                      style={{
                        ...style,
                        transformStyle: "preserve-3d",
                        transformOrigin: "center center",
                      }}
                    >
                      <div
                        className={`relative bg-gradient-to-br from-card to-card/90 rounded-3xl overflow-hidden shadow-elegant ${
                          isCenter ? "ring-4 ring-primary/50 shadow-glow" : ""
                        }`}
                        style={{ height: "650px" }}
                      >
                        {/* Video */}
                        <div className="relative h-[500px] overflow-hidden">
                          {review.video ? (
                            review.video.includes("youtube.com") ||
                            review.video.includes("youtu.be") ? (
                              <iframe
                                src={getYouTubeEmbedURL(review.video)}
                                title={review.name}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full rounded-3xl"
                              />
                            ) : (
                              <video
                                src={review.video}
                                controls
                                className="w-full h-full object-cover rounded-3xl"
                              />
                            )
                          ) : (
                            <div className="flex items-center justify-center w-full h-full bg-black/50 text-white">
                              No video available
                            </div>
                          )}

                          {/* Top overlay */}
                          <div className="absolute top-0 left-0 right-0 p-6 bg-gradient-to-b from-black/60 to-transparent z-10">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                                  {review.avatar}
                                </div>
                                <div className="flex flex-col">
                                  <h3 className="font-bold text-white flex items-center gap-2">
                                    {review.name}
                                  </h3>
                                  <p className="text-xs text-white/80 font-arabic">
                                    {review.nameArabic}
                                  </p>
                                </div>
                              </div>
                              {review.verified && (
                                <div className="px-2 py-1 bg-green-500/90 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                                  <Award className="w-3 h-3" /> Verified
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Bottom overlay */}
                        </div>

                        {/* Video info */}
                        <div className="p-2 bg-card ">
                          <div className="flex items-center justify-between mb-2 ">
                            <div className="flex  items-center gap-1 ">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-amber-400 text-amber-400"
                                />
                              ))}
                            </div>
                            <img
                              src={review.productImage}
                              alt={review.product}
                              className="w-8 h-8 rounded-full object-cover"
                            />
                            <button className="group relative px-5 py-2.5 bg-primary text-white text-xs font-bold rounded-full shadow-glow hover:shadow-[0_0_30px_hsl(var(--primary-glow)/0.6)] transition-all duration-300 hover:scale-105 active:scale-95 overflow-hidden">
                              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                              <span className="relative flex items-center gap-2">
                                <ShoppingBag className="w-3.5 h-3.5" />
                                Buy Now
                                <Sparkles className="w-3 h-3" />
                              </span>
                            </button>
                          </div>
                          <div className="flex items-center justify-center mb-3 ">
                            <div className="text-lg font-semibold text-primary flex items-center  gap-2">
                              {review.product}
                            </div>
                            {/* <div className="absolute right-4 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="w-3 h-3" />{" "}
                            {review.location.split(",")[0]}
                          </div> */}
                          </div>
                          <p className="text-sm text-foreground/80 line-clamp-2 mb-3">
                            "{review.comment}"
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Desktop Navigation */}
                <button
                  onClick={prevVideo}
                  disabled={isAnimating}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary shadow-glow disabled:opacity-50 z-50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <ChevronLeft className="w-7 h-7 text-white" />
                </button>
                <button
                  onClick={nextVideo}
                  disabled={isAnimating}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary shadow-glow disabled:opacity-50 z-50 flex items-center justify-center transition-all hover:scale-110"
                >
                  <ChevronRight className="w-7 h-7 text-white" />
                </button>

                {/* Dots */}
                <div className="flex justify-center gap-2 mt-8">
                  {videoReviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        if (!isAnimating) {
                          setIsAnimating(true);
                          setCurrentVideoIndex(index);
                          setTimeout(() => setIsAnimating(false), 600);
                        }
                      }}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentVideoIndex
                          ? "w-8 h-2 bg-primary"
                          : "w-2 h-2 bg-primary/30 hover:bg-primary/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}
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
