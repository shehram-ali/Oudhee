import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, Star, Sparkles } from "lucide-react";
import comboImage from "@/assets/combo-deals.jpg";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "sonner";

const combos = [
  {
    id: 1,
    name: "Ameeri Oil + Suyufi Grade 1 Chips",
    description: "Perfect starter set combining premium oil with finest chips",
    price: 8000,
    savings: 1800,
    items: ["Ameeri Oil (1 bottle)", "Suyufi Grade 1 Chips"],
  },
  {
    id: 2,
    name: "Chips Sampler Pack",
    description: "Experience three grades of Suyufi excellence",
    price: 20200,
    savings: 4000,
    items: ["Suyufi Grade 1", "Suyufi Grade 2", "Suyufi Grade 3"],
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Oil Duo Gift Set",
    description: "The ultimate luxury oil collection",
    price: 3200,
    savings: 600,
    items: ["Maliki Oil", "Ameeri Oil"],
  },
  {
    id: 4,
    name: "Chips Trio Gift",
    description: "Premium Grade 1 collection from three varieties",
    price: 52000,
    savings: 10500,
    items: ["Girmeet Grade 1", "Chaar Grade 1", "Sella Grade 1"],
    badge: "Premium",
  },
  {
    id: 5,
    name: "Experience Set",
    description: "The complete Oudhee luxury experience",
    price: 59400,
    savings: 12600,
    items: ["Suyufi Ameeri Chips", "Suyufi Triple Super Grade 1", "Ameeri Oil"],
    badge: "Ultimate",
  },
];

const ComboDeals = () => {
  const dispatch = useDispatch();

  const handleAdd = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-6 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Exclusive Bundles
            </span>
          </div>
          <p className="font-script text-5xl md:text-6xl text-primary mb-3">
            Gift Collections
          </p>
          <div className="layered-heading mb-4">
            <span className="layered-heading-bg text-[8rem] md:text-[12rem]">
              Collections
            </span>
            <h2 className="layered-heading-fg text-4xl md:text-5xl font-bold font-serif">
              Premium Combo Deals
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated collections designed to give you the complete Oudhee
            experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {combos.map((combo, index) => (
            <Card
              key={combo.id}
              className="overflow-hidden hover-lift group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/3 relative h-48 md:h-auto">
                  <img
                    src={comboImage}
                    alt={combo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {combo.badge && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      {combo.badge}
                    </Badge>
                  )}
                </div>

                {/* Content Section */}
                <div className="md:w-2/3 p-6">
                  <h3 className="text-2xl font-bold mb-2 font-serif">
                    {combo.name}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {combo.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-foreground mb-2">
                      Includes:
                    </p>
                    <ul className="space-y-1">
                      {combo.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-center text-sm text-muted-foreground"
                        >
                          <Star className="w-3 h-3 mr-2 text-primary fill-primary" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-end justify-between mb-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-primary">
                          {combo.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          AED
                        </span>
                      </div>
                      <p className="text-sm text-green-600 font-medium">
                        Save {combo.savings.toLocaleString()} AED
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => handleAdd(combo)}
                    className="w-full bg-primary hover:bg-primary-glow group/btn"
                  >
                    <Gift className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComboDeals;
