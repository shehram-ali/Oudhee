import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/oudhee-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="Oudhee" className="h-16 w-auto mb-4" />
            <p className="text-secondary-foreground/80 mb-4">
              Premium oud perfume oils and incense chips from the heart of Arabia.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#oils" className="hover:text-primary transition-colors">
                  Oud Oils
                </a>
              </li>
              <li>
                <a href="#chips" className="hover:text-primary transition-colors">
                  Oud Chips
                </a>
              </li>
              <li>
                <a href="#combos" className="hover:text-primary transition-colors">
                  Combo Deals
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-serif">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">info@oudhee.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">+971 XX XXX XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/70">
            © 2025 Oudhee. All rights reserved. Crafted with passion for premium oud.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
