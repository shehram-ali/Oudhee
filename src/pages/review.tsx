import React, { useState, useEffect } from "react";
import {
  Star,
  ThumbsUp,
  Award,
  Users,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Search,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import {
  filters,
  ratingDistribution,
  reviews,
  videoReviews as initialVideoReviews,
} from "@/data/products";
import WriteReviewModal from "@/components/WriteReviewModal";
import Navigation from "@/components/Navigation";
import heroImage from "@/assets/hero-perfume.jpg";
import luxuryBg from "@/assets/luxury-bg.jpg";

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

const Reviews = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [textReviews, setTextReviews] = useState<Review[]>(reviews);
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

  const handleAddReview = (newReview: Review) => {
    const reviewWithDefaults: Review = {
      id: Date.now(),
      ...newReview,
      date: "Just now",
      helpful: 0,
      avatar: newReview.name?.charAt(0).toUpperCase() || "U",
    };
    if (newReview.video && newReview.video.trim() !== "") {
      setVideoReviews((prev) => [...prev, reviewWithDefaults]);
    } else {
      setTextReviews((prev) => [...prev, reviewWithDefaults]);
    }
    setShowForm(false);
  };

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

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />

      {/* Hero Section */}
      <section className="relative mt-20 py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-secondary/85 to-background" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-primary mb-6 layered-heading">
            <span className="layered-heading-bg text-[8rem] md:text-[14rem]">
              Reviews
            </span>
            <span className="layered-heading-fg">Customer Reviews</span>
          </h1>
          <p className="text-xl md:text-2xl text-secondary-foreground font-sans leading-relaxed mb-8">
            Real experiences from our valued customers across the Middle East
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, i) => (
              <div
                key={i}
                className="text-center p-6 bg-background rounded-2xl shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-primary/10"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="text-primary mb-3 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Reviews 3D Carousel */}
      <section className="py-20 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${luxuryBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Video Reviews
            </h2>
            <p className="text-xl text-muted-foreground">
              Watch real customers share their experiences
            </p>
          </div>

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
      </section>

      {/* Rating Distribution */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Rating Breakdown
            </h2>
            <div className="bg-background rounded-2xl p-8 shadow-elegant border border-primary/10">
              {ratingDistribution.map((rating, index) => (
                <div
                  key={rating.stars}
                  className="flex items-center gap-4 mb-4 last:mb-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-1 w-24">
                    <span className="text-sm font-semibold">
                      {rating.stars}
                    </span>
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  </div>
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full transition-all duration-1000"
                      style={{ width: `${rating.percentage}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-muted-foreground w-16 text-right">
                    {rating.count}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-card/80 sticky top-20 z-30 backdrop-blur-xl border-b border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  className="w-full pl-12 pr-4 py-3 bg-background border border-primary/20 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setSelectedFilter(filter.id)}
                    className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                      selectedFilter === filter.id
                        ? "bg-primary text-white shadow-glow"
                        : "bg-card hover:bg-card/80 text-foreground border border-primary/20"
                    }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Text Reviews Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Written Reviews
            </h2>
            <p className="text-xl text-muted-foreground">
              More stories from our satisfied customers
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {textReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border border-primary/10"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold shadow-lg">
                          {review.avatar}
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground">
                            {review.name}
                          </h3>
                          <p className="text-xs text-muted-foreground font-arabic">
                            {review.nameArabic}
                          </p>
                        </div>
                      </div>
                      {review.verified && (
                        <div className="px-3 py-1 bg-green-500/90 text-white rounded-full text-xs font-semibold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          Verified
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="text-sm font-semibold text-primary">
                        {review.product}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {review.location}
                      </div>
                    </div>

                    <p className="text-foreground/80 leading-relaxed mb-4">
                      "{review.comment}"
                    </p>

                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-primary/10 pt-3 mt-auto">
                      <button className="flex items-center gap-1 hover:text-primary transition-colors">
                        <ThumbsUp className="w-4 h-4" />
                        {review.helpful}
                      </button>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url(${luxuryBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Share Your Oudhee Experience
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            We'd love to hear your story — leave a review and inspire others to
            experience true luxury.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:shadow-glow transition-all hover:scale-105"
          >
            Write a Review
          </button>
        </div>
      </section>

      <WriteReviewModal
        open={showForm}
        onClose={() => setShowForm(false)}
        onSubmit={handleAddReview}
      />
    </div>
  );
};

export default Reviews;
