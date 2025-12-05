import { Link } from 'react-router-dom';
import { ArrowRight, Star, UtensilsCrossed, IceCream, Cookie } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1762637449801-dfa656b5ca73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGNyZXBlcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzY0OTEzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Delicious crepes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5D4037]/80 to-[#5D4037]/60" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="mb-6 text-5xl md:text-6xl">Sweet Moments Made Fresh</h1>
          <p className="mb-8 text-xl opacity-95">
            Experience the perfect blend of flavor and comfort at Perris' favorite creperie
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/menu" 
              className="bg-[#FFB6C1] text-[#5D4037] px-8 py-4 rounded-full hover:bg-[#ff9fad] transition-colors flex items-center gap-2"
            >
              View Menu <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/contact" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full hover:bg-white/30 transition-colors border border-white/40"
            >
              Visit Us
            </Link>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-lg">4.5/5 from 300+ happy customers</span>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 text-[#5D4037]">What We Offer</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-[#FFF8F0] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <UtensilsCrossed className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-[#5D4037]">Sweet & Savory Crepes</h3>
              <p className="text-[#5D4037]/80">
                From classic Nutella to savory ham and cheese, we have the perfect crepe for every craving
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#FFF8F0] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#B0E0E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <IceCream className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-[#5D4037]">Rolled Ice Cream</h3>
              <p className="text-[#5D4037]/80">
                Watch as we craft your ice cream rolls fresh before your eyes with premium toppings
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-[#FFF8F0] hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Cookie className="w-8 h-8 text-white" />
              </div>
              <h3 className="mb-3 text-[#5D4037]">Mini Pancakes & More</h3>
              <p className="text-[#5D4037]/80">
                Delicious mini pancakes and a wide variety of snacks to satisfy every sweet tooth
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Items */}
      <section className="py-16 px-4 bg-[#FFFAF5]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center mb-12 text-[#5D4037]">Customer Favorites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1762637449801-dfa656b5ca73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGNyZXBlcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzY0OTEzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sweet Crepes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#5D4037]">Sweet Crepes</h3>
                <p className="text-[#5D4037]/70">Nutella, strawberries, bananas, and more delicious toppings</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1648962492952-e50aa990cfdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZWQlMjBpY2UlMjBjcmVhbXxlbnwxfHx8fDE3NjQ5NzUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Rolled Ice Cream"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#5D4037]">Rolled Ice Cream</h3>
                <p className="text-[#5D4037]/70">Fresh-made ice cream rolls with whipped cream and toppings</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580568183078-5f3464ac07e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pJTIwcGFuY2FrZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzY0OTc1MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Mini Pancakes"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-[#5D4037]">Mini Pancakes</h3>
                <p className="text-[#5D4037]/70">Fluffy, bite-sized pancakes perfect for any time of day</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/menu" 
              className="inline-flex items-center gap-2 bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              See Full Menu <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-[#5D4037] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-12 text-[#FFB6C1]">What Our Customers Say</h2>
          
          <div className="space-y-8">
            <blockquote className="italic text-xl opacity-95">
              "Delicious food, very kind service, peaceful atmosphere!"
            </blockquote>
            
            <blockquote className="italic text-xl opacity-95">
              "Wide variety of snacks, super friendly customer service and decent prices."
            </blockquote>
            
            <blockquote className="italic text-xl opacity-95">
              "Great small business! Friendly environment, friendly staff."
            </blockquote>
          </div>
          
          <Link 
            to="/reviews" 
            className="inline-flex items-center gap-2 mt-8 bg-[#FFB6C1] text-[#5D4037] px-6 py-3 rounded-full hover:bg-[#ff9fad] transition-colors"
          >
            Read More Reviews <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFB6C1] to-[#B0E0E6]">
        <div className="max-w-4xl mx-auto text-center text-[#5D4037]">
          <h2 className="mb-6">Ready to Satisfy Your Cravings?</h2>
          <p className="mb-8 text-xl">
            Visit us today for dine-in or takeout. We can't wait to serve you!
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://maps.google.com/?q=1675+N+Perris+Blvd+A16+Perris+CA+92571" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              Get Directions
            </a>
            <a 
              href="tel:9512891580" 
              className="bg-white text-[#5D4037] px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
