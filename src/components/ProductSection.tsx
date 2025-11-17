import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Star } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";
import { toast } from "sonner";

interface Product {
  name: string;
  nameArabic: string;
  code: string;
  price: number;
  grade?: string;
  badge?: string;
}

interface ProductSectionProps {
  title: string;
  description: string;
  products: Product[];
  bgColor?: string;
}

const ProductSection = ({
  title,
  description,
  products,
  bgColor = "bg-background",
}: ProductSectionProps) => {
  const dispatch = useDispatch();

  const handleAdd = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <section className={`py-20 px-4 ${bgColor}`}>
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <p className="font-script text-5xl md:text-6xl text-primary mb-3">
            {title.includes("Oil")
              ? "Perfume Collection"
              : "Incense Collection"}
          </p>
          <div className="layered-heading mb-4">
            <span className="layered-heading-bg text-[8rem] md:text-[12rem]">
              {title.includes("Oil") ? "Fragrance" : "Agarwood"}
            </span>
            <h2 className="layered-heading-fg text-4xl md:text-5xl font-bold font-serif">
              {title}
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card
              key={product.code}
              className="group overflow-hidden hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                {product.badge && (
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground z-10">
                    {product.badge}
                  </Badge>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Star className="w-8 h-8 text-primary fill-primary/50" />
                    </div>
                    <p className="text-2xl font-bold text-primary mb-2 font-arabic">
                      {product.nameArabic}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 line-clamp-2 font-serif">
                  {product.name}
                </h3>
                {product.grade && (
                  <p className="text-sm text-primary font-script text-xl mb-3">
                    {product.grade}
                  </p>
                )}
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-primary">
                    {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-muted-foreground">AED</span>
                </div>
                <Button
                  onClick={() => handleAdd(product)}
                  className="w-full bg-primary hover:bg-primary-glow group"
                >
                  <ShoppingCart className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Add to Cart
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
