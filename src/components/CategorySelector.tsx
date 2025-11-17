import oudOilImg from "@/assets/oud-oil.jpg";
import oudChipsImg from "@/assets/oud-chips.jpg";
import comboDealsImg from "@/assets/combo-deals.jpg";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Oud Oil",
    subtitle: "Premium Fragrances",
    image: oudOilImg,
    description: "Exquisite perfume oils from the finest oud",
    route: "/#oils",
  },
  {
    title: "Oud Chips",
    subtitle: "Rare Incense",
    image: oudChipsImg,
    description: "Authentic agarwood chips for traditional burning",
    route: "/#chips",
  },
  {
    title: "Combo Deals",
    subtitle: "Luxury Gift Sets",
    image: comboDealsImg,
    description: "Curated collections for the perfect experience",
    route: "/#combos",
  },
];

const CategorySelector = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-script text-5xl md:text-6xl text-primary mb-3">
            Explore Collections
          </p>
          <div className="layered-heading mb-4">
            <span className="layered-heading-bg text-[8rem] md:text-[12rem]">
              Experience
            </span>
            <h2 className="layered-heading-fg text-4xl md:text-5xl font-bold font-serif">
              Choose Your Collection
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated collections of premium oud products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {categories.map((category, index) => (
            <a href={category.route} key={category.title}>
              <div
                key={category.title}
                className="group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative aspect-square rounded-full overflow-hidden mb-6 hover-lift">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                    <span className="text-primary-foreground font-semibold text-lg">
                      Explore
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2 font-serif">
                    {category.title}
                  </h3>
                  <p className="font-script text-2xl text-primary mb-2">
                    {category.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {category.description}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;
