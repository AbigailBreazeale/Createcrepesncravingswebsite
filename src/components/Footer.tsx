import { Heart, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#5D4037] text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-[#FFB6C1] mb-4">Crepes N Cravings</h3>
            <p className="text-sm opacity-90 mb-4">
              Your neighborhood spot for delicious sweet & savory crepes, rolled ice cream, 
              and mini pancakes. Made fresh with love!
            </p>
            <div className="flex items-center gap-2">
              <span className="text-[#D4AF37]">★★★★★</span>
              <span className="text-sm">4.5/5 from 300+ reviews</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-[#FFB6C1] mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/menu" className="hover:text-[#FFB6C1] transition-colors">View Menu</a></li>
              <li><a href="/about" className="hover:text-[#FFB6C1] transition-colors">About Us</a></li>
              <li><a href="/reviews" className="hover:text-[#FFB6C1] transition-colors">Customer Reviews</a></li>
              <li><a href="/gallery" className="hover:text-[#FFB6C1] transition-colors">Photo Gallery</a></li>
              <li><a href="/contact" className="hover:text-[#FFB6C1] transition-colors">Contact & Hours</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-[#FFB6C1] mb-4">Visit Us</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>1675 N Perris Blvd A16<br />Perris, CA 92571</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:9512891580" className="hover:text-[#FFB6C1] transition-colors">
                  (951) 289-1580
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Open Daily<br />Closes at 8 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-[#FFB6C1] fill-current" /> in Perris, California
          </p>
          <p className="mt-2">&copy; {new Date().getFullYear()} Crepes N Cravings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
