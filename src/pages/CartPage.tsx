import { useSelector, useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "@/features/cart/cartSlice";
import { ShoppingBag, Trash2, Plus, Minus, X, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const CartPage = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeFromCart(item.code));
    toast.success(`${item.name} removed from cart`);
  };

  const handleClear = () => {
    dispatch(clearCart());
    toast.success("Cart cleared");
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 py-20 px-4">
        <Navigation />
        <div className="container mx-auto max-w-2xl">
          <Card className="p-12 text-center animate-fade-in">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <ShoppingBag className="w-12 h-12 text-primary/50" />
            </div>
            <h2 className="text-3xl font-bold font-serif mb-3">
              Your Cart is Empty
            </h2>
            <p className="text-muted-foreground mb-8">
              Discover our exquisite collection of perfumes and incense
            </p>
            <Link to="/" className="w-full">
              <Button className="bg-primary hover:bg-primary-glow">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <p className="font-script text-4xl md:text-5xl text-primary mb-2">
            Shopping Cart
          </p>
          <h1 className="text-3xl md:text-4xl font-bold font-serif">
            Your Selection
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <Card
                key={item.code}
                className="overflow-hidden hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="p-6">
                  <div className="flex gap-6">
                    {/* Product Image Area */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary font-arabic">
                          {item.nameArabic?.charAt(0) || item.name.charAt(0)}
                        </span>
                      </div>
                    </div>

                    {/* Product Details */}
                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="text-lg font-semibold font-serif mb-1">
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground font-arabic">
                            {item.nameArabic}
                          </p>
                          {item.grade && (
                            <Badge
                              variant="outline"
                              className="mt-2 font-script"
                            >
                              {item.grade}
                            </Badge>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleRemove(item)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3 bg-muted/50 rounded-lg p-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              dispatch(decreaseQuantity(item.code))
                            }
                            className="h-8 w-8 rounded-md hover:bg-background"
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() =>
                              dispatch(increaseQuantity(item.code))
                            }
                            className="h-8 w-8 rounded-md hover:bg-background"
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-primary">
                              {(item.price * item.quantity).toLocaleString()}
                            </span>
                            <span className="text-sm text-muted-foreground">
                              AED
                            </span>
                          </div>
                          {item.quantity > 1 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {item.price.toLocaleString()} AED each
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {/* Clear Cart Button */}
            <Button
              variant="outline"
              onClick={handleClear}
              className="w-full border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 animate-fade-in">
              <div className="p-6">
                <h3 className="text-xl font-bold font-serif mb-6">
                  Order Summary
                </h3>

                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">
                      {totalAmount.toLocaleString()} AED
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Items</span>
                    <span className="font-semibold">
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-baseline mb-6">
                  <span className="text-lg font-semibold">Total</span>
                  <div className="text-right">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-primary">
                        {totalAmount.toLocaleString()}
                      </span>
                      <span className="text-sm text-muted-foreground">AED</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary-glow mb-3">
                  Proceed to Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <Link to="/" className="w-full">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t">
                  <p className="text-xs text-muted-foreground text-center">
                    Free shipping on all orders • Secure checkout • 30-day
                    returns
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
