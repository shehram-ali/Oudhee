import { Button } from "@/components/ui/button";
import { Clock, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const SpecialOffer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary via-secondary to-primary/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-2 rounded-full mb-6 animate-scale-in">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">Limited Time Offer</span>
          </div>

          <p className="font-script text-5xl md:text-7xl text-primary mb-4 animate-fade-in-up">Limited Time Only</p>
          <div className="layered-heading mb-8 animate-fade-in-up">
            <span className="layered-heading-bg text-[8rem] md:text-[14rem]">Special</span>
            <h2 className="layered-heading-fg text-4xl md:text-6xl font-bold text-secondary-foreground font-serif">
              Ramadan Special
            </h2>
          </div>
          <p className="text-xl md:text-2xl mb-8 text-secondary-foreground/90">
            Get <span className="text-primary font-bold text-3xl">25% OFF</span> on all Suyufi Collections
          </p>

          {/* Countdown Timer */}
          <div className="flex justify-center gap-4 md:gap-8 mb-10">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item, index) => (
              <div
                key={item.label}
                className="bg-card rounded-2xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] shadow-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl md:text-5xl font-bold text-primary mb-2">
                  {item.value.toString().padStart(2, "0")}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-lg px-8 py-6 golden-glow group">
              <Clock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Claim Your Offer
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-2 border-primary text-secondary-foreground hover:bg-card"
            >
              View All Deals
            </Button>
          </div>

          <p className="mt-6 text-sm text-secondary-foreground/70">
            *Offer valid on select Suyufi products. Terms and conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
