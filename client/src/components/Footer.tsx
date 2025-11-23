import { Leaf, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-serif text-lg font-bold">Fresh Greens</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Premium indigenous leafy vegetables grown with traditional farming practices.
              Fresh from our farm to your table.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-heading-quick-links">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-home"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/products" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-products"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors" 
                  data-testid="link-footer-contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-heading-products">Our Products</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Amaranth</li>
              <li className="text-sm text-muted-foreground">Black Nightshade</li>
              <li className="text-sm text-muted-foreground">Cowpea Leaves</li>
              <li className="text-sm text-muted-foreground">Fordhook Swiss Chard</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" data-testid="text-footer-heading-contact">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-phone">+254 712 345 678</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-email">hello@freshgreens.co.ke</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground" data-testid="text-footer-location">
                  Kiambu County, Kenya
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fresh Greens. All rights reserved. Grown with love and traditional care.
          </p>
        </div>
      </div>
    </footer>
  );
}
