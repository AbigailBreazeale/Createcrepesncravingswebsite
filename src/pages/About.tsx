import { Heart, Users, Award, TrendingUp } from 'lucide-react';

export function About() {
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#5D4037] to-[#4A2C24] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-[#FFB6C1]">About Us</h1>
          <p className="text-xl opacity-95">
            Your neighborhood destination for sweet moments and warm memories
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-[#5D4037] mb-6 text-center">Our Story</h2>
            <div className="space-y-4 text-[#5D4037]/80">
              <p>
                Welcome to Crepes N Cravings, where every visit is a sweet celebration! Located in 
                the heart of Perris, California, we've become the neighborhood's favorite spot for 
                delicious crepes, rolled ice cream, and treats that bring smiles to faces of all ages.
              </p>
              <p>
                Our passion is simple: creating fresh, high-quality food in a warm and welcoming 
                environment. Whether you're stopping by for a quick snack, treating yourself to 
                something sweet, or enjoying a meal with family and friends, we're here to make 
                your experience memorable.
              </p>
              <p>
                From our signature sweet and savory crepes to our mesmerizing rolled ice cream made 
                fresh before your eyes, every item on our menu is crafted with care and attention 
                to detail. We believe in using quality ingredients and serving them with a smile.
              </p>
              <p>
                Thank you to our amazing community for making us a 4.5-star rated establishment with 
                over 300 reviews. Your support means the world to us, and we look forward to serving 
                you again and again!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Values */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#5D4037] mb-12 text-center">What Makes Us Special</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#FFB6C1] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#5D4037] mb-3">Made with Love</h3>
              <p className="text-[#5D4037]/70 text-sm">
                Every dish is prepared fresh with premium ingredients and genuine care
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#B0E0E6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#5D4037] mb-3">Friendly Service</h3>
              <p className="text-[#5D4037]/70 text-sm">
                Our welcoming staff treats every customer like family
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#5D4037] mb-3">Top Rated</h3>
              <p className="text-[#5D4037]/70 text-sm">
                4.5 stars from 300+ reviews - our community loves us!
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#5D4037] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-[#5D4037] mb-3">Great Prices</h3>
              <p className="text-[#5D4037]/70 text-sm">
                Affordable, delicious food that won't break the bank
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Highlights */}
      <section className="py-16 px-4 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#5D4037] mb-12 text-center">Why Choose Crepes N Cravings?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#5D4037] mb-3">Fresh Ingredients</h3>
              <p className="text-[#5D4037]/70">
                We use only the freshest, highest-quality ingredients to ensure every bite is delicious
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#5D4037] mb-3">Wide Variety</h3>
              <p className="text-[#5D4037]/70">
                From sweet to savory, ice cream to mini pancakes - there's something for everyone
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#5D4037] mb-3">Family Friendly</h3>
              <p className="text-[#5D4037]/70">
                A peaceful, welcoming atmosphere perfect for families, friends, and solo treats
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-[#5D4037] mb-3">Community Focused</h3>
              <p className="text-[#5D4037]/70">
                Proud to be a local small business serving the Perris community
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFB6C1] to-[#B0E0E6]">
        <div className="max-w-4xl mx-auto text-center text-[#5D4037]">
          <h2 className="mb-6">Come Visit Us!</h2>
          <p className="mb-8 text-xl">
            Experience the warmth, flavor, and friendliness that our customers rave about
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/menu" 
              className="bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              View Menu
            </a>
            <a 
              href="/contact" 
              className="bg-white text-[#5D4037] px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
