import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logo from "@/assets/oudhee-logo.jpeg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Oudhee"
              className="h-20 w-auto object-cover scale-150 origin-left"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/#oils"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Oud Oils
            </a>
            <a
              href="/#chips"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Oud Chips
            </a>
            <a
              href="/#combos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Combo Deals
            </a>
            <a
              href="/about"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>
            <a
              href="/review"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Review
            </a>
          </div>

          {/* Cart & Mobile Menu */}
          <div className="flex items-center gap-4">
            <NavLink
              to="/cart"
              variant="ghost"
              size="icon"
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {totalQuantity > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalQuantity}
                </span>
              )}
            </NavLink>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a
                href="#oils"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Oud Oils
              </a>
              <a
                href="#chips"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Oud Chips
              </a>
              <a
                href="#combos"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Combo Deals
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/review"
                className="text-foreground hover:text-primary transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Review
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
