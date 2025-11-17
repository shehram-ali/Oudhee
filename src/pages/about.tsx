import React from "react";
import { Sparkles, Heart, Award, Globe, Users, Leaf } from "lucide-react";
import Navigation from "@/components/Navigation";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Authenticity",
      description:
        "Every product is sourced from the finest agarwood regions, ensuring genuine quality.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description:
        "Our deep love for oud drives us to curate only the most exquisite fragrances.",
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "We partner with sustainable sources to preserve precious agarwood for generations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description:
        "Building lasting relationships with artisans and connoisseurs worldwide.",
    },
  ];

  const milestones = [
    {
      year: "2015",
      event: "Oudhee Founded",
      description: "Journey began in the heart of Arabia",
    },
    {
      year: "2017",
      event: "First Collection",
      description: "Launched premium oud oils collection",
    },
    {
      year: "2019",
      event: "Global Expansion",
      description: "Reached customers in 25 countries",
    },
    {
      year: "2023",
      event: "Excellence Award",
      description: "Recognized for quality and authenticity",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary via-background to-secondary">
      <Navigation />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(184,134,11,0.1),transparent)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <div className="inline-block mb-6">
              <Sparkles className="w-12 h-12 text-primary mx-auto animate-pulse" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-primary mb-6 layered-heading">
              <span className="layered-heading-bg text-[8rem] md:text-[12rem]">
                Story
              </span>
              <span className="layered-heading-fg">Our Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-sans leading-relaxed">
              A journey through time, tradition, and the art of perfumery
            </p>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in order-2 md:order-1">
              <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl font-arabic text-primary/30 mb-4">
                      عود
                    </div>
                    <p className="text-primary-foreground text-lg font-serif">
                      The Essence of Luxury
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-fade-in-up order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                The Essence of Oudhee
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Born from a profound appreciation for the ancient art of oud,
                Oudhee represents the perfect marriage of tradition and luxury.
                Our founder's journey began in the bustling souks of Arabia,
                where the intoxicating aroma of agarwood first captured their
                heart.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Today, we honor that heritage by sourcing only the finest oud
                from sustainable plantations across Southeast Asia and the
                Middle East. Each bottle tells a story of craftsmanship,
                patience, and dedication to preserving an art form that has
                enchanted civilizations for millennia.
              </p>
              <div className="pt-4">
                <div className="inline-block px-6 py-3 bg-primary/10 rounded-full">
                  <p className="text-primary font-semibold">
                    Est. 2015 • Trusted by 10,000+ Customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="group p-8 bg-background rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Milestones in our pursuit of excellence
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative mb-12 animate-fade-in-up ${
                    index % 2 === 0
                      ? "md:text-right md:pr-[55%]"
                      : "md:text-left md:pl-[55%]"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg hidden md:block" />

                  <div className="bg-card p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-primary/20">
                    <div className="text-3xl font-bold text-primary mb-2 font-serif">
                      {milestone.year}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {milestone.event}
                    </h3>
                    <p className="text-muted-foreground">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-fade-in-up">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary">
                  Artisanal Excellence
                </h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Each of our products is a testament to centuries-old
                  distillation techniques, refined and perfected by master
                  perfumers. We work directly with artisans who have inherited
                  the sacred knowledge of oud extraction through generations.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  From selecting the finest agarwood to the careful aging
                  process, every step is executed with meticulous attention to
                  detail. The result is a collection that captures the soul of
                  oud in its purest, most magnificent form.
                </p>
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Authentic
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      25+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Countries
                    </div>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <div className="text-3xl font-bold text-primary mb-1">
                      10K+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Customers
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-fade-in">
                <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Globe className="w-32 h-32 text-primary/20 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/20 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Experience the Oudhee Difference
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of connoisseurs who have discovered the authentic
              luxury of premium oud
            </p>
            <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              Explore Our Collection
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .layered-heading {
          position: relative;
          display: inline-block;
        }
        
        .layered-heading-bg {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-weight: 900;
          opacity: 0.03;
          white-space: nowrap;
          pointer-events: none;
          color: hsl(var(--primary));
        }
        
        .layered-heading-fg {
          position: relative;
          z-index: 1;
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
