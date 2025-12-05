import { Star, Quote } from 'lucide-react';

export function Reviews() {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Delicious food, very kind service, peaceful atmosphere! This has become my go-to spot for dessert.",
      date: "2 weeks ago"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "Wide variety of snacks, super friendly customer service and decent prices. The rolled ice cream is amazing!",
      date: "1 month ago"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Great small business! Friendly environment, friendly staff. My kids love the mini pancakes.",
      date: "3 weeks ago"
    },
    {
      name: "David K.",
      rating: 4,
      text: "Really enjoyed the savory crepes. The ham and cheese was perfectly cooked and the portion size was great for the price.",
      date: "2 months ago"
    },
    {
      name: "Emily T.",
      rating: 5,
      text: "The banana rolled ice cream with whipped cream is to die for! They make it fresh right in front of you. Such a fun experience!",
      date: "1 week ago"
    },
    {
      name: "Carlos G.",
      rating: 5,
      text: "Best crepes in the area! The Nutella crepe is my favorite. Staff is always welcoming and the place is always clean.",
      date: "3 weeks ago"
    },
    {
      name: "Amanda B.",
      rating: 4,
      text: "Love this place! Great for a casual hangout with friends. The atmosphere is relaxed and the treats are delicious.",
      date: "2 weeks ago"
    },
    {
      name: "Robert H.",
      rating: 5,
      text: "Family-owned feel with amazing service. They really care about their customers and the quality shows in every dish.",
      date: "1 month ago"
    },
    {
      name: "Lisa W.",
      rating: 5,
      text: "The strawberry crepe was incredible! Fresh fruit and the perfect amount of sweetness. Will definitely be back!",
      date: "4 days ago"
    },
    {
      name: "Jason P.",
      rating: 4,
      text: "Good variety on the menu and reasonable prices. The mini pancakes are a hit with my kids every time we visit.",
      date: "3 weeks ago"
    },
    {
      name: "Nicole S.",
      rating: 5,
      text: "Such a cute spot! The staff is so friendly and patient. I tried the cookies and cream rolled ice cream - perfection!",
      date: "2 weeks ago"
    },
    {
      name: "Tom D.",
      rating: 5,
      text: "Clean, friendly, and delicious! This is what a local dessert shop should be. Highly recommend to anyone in the area.",
      date: "1 month ago"
    }
  ];
  
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'}`} 
          />
        ))}
      </div>
    );
  };
  
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#5D4037] to-[#4A2C24] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-[#FFB6C1]">Customer Reviews</h1>
          <p className="text-xl opacity-95 mb-6">
            See what our happy customers have to say
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-8 h-8 ${i < 4 ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-[#D4AF37]/50'}`} />
              ))}
            </div>
            <span className="text-2xl">4.5 out of 5</span>
          </div>
          <p className="mt-2 opacity-75">Based on 300+ customer reviews</p>
        </div>
      </section>
      
      {/* Reviews Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-[#FFB6C1] opacity-20" />
                
                <div className="mb-4">
                  <h3 className="text-[#5D4037] mb-2">{review.name}</h3>
                  {renderStars(review.rating)}
                  <p className="text-sm text-[#5D4037]/50 mt-1">{review.date}</p>
                </div>
                
                <p className="text-[#5D4037]/80 italic">
                  "{review.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#5D4037] mb-12 text-center">By The Numbers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-[#FFF8F0] rounded-xl">
              <div className="text-4xl mb-2 text-[#5D4037]">4.5★</div>
              <p className="text-[#5D4037]/70">Average Rating</p>
            </div>
            
            <div className="text-center p-6 bg-[#FFF8F0] rounded-xl">
              <div className="text-4xl mb-2 text-[#5D4037]">300+</div>
              <p className="text-[#5D4037]/70">Customer Reviews</p>
            </div>
            
            <div className="text-center p-6 bg-[#FFF8F0] rounded-xl">
              <div className="text-4xl mb-2 text-[#5D4037]">95%</div>
              <p className="text-[#5D4037]/70">Would Recommend</p>
            </div>
            
            <div className="text-center p-6 bg-[#FFF8F0] rounded-xl">
              <div className="text-4xl mb-2 text-[#5D4037]">100%</div>
              <p className="text-[#5D4037]/70">Fresh Ingredients</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFB6C1] to-[#B0E0E6]">
        <div className="max-w-4xl mx-auto text-center text-[#5D4037]">
          <h2 className="mb-6">Ready to Write Your Own Review?</h2>
          <p className="mb-8 text-xl">
            Visit us today and experience why our customers love us!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              Visit Us
            </a>
            <a 
              href="/menu" 
              className="bg-white text-[#5D4037] px-8 py-4 rounded-full hover:bg-white/90 transition-colors"
            >
              View Menu
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
