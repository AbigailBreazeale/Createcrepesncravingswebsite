import { MapPin, Phone, Clock, Mail, Navigation } from 'lucide-react';

export function Contact() {
  const hours = [
    { day: "Monday", hours: "10:00 AM - 8:00 PM" },
    { day: "Tuesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Wednesday", hours: "10:00 AM - 8:00 PM" },
    { day: "Thursday", hours: "10:00 AM - 8:00 PM" },
    { day: "Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 8:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" }
  ];
  
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#5D4037] to-[#4A2C24] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-[#FFB6C1]">Visit Us</h1>
          <p className="text-xl opacity-95">
            We'd love to see you! Find all the information you need below.
          </p>
        </div>
      </section>
      
      {/* Contact Info Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Location */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FFB6C1] rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#5D4037]">Location</h2>
            </div>
            <p className="text-[#5D4037]/80 mb-4">
              1675 N Perris Blvd A16<br />
              Perris, CA 92571
            </p>
            <a 
              href="https://maps.google.com/?q=1675+N+Perris+Blvd+A16+Perris+CA+92571"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#5D4037] text-white px-6 py-3 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              <Navigation className="w-4 h-4" />
              Get Directions
            </a>
          </div>
          
          {/* Phone */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#B0E0E6] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#5D4037]">Phone</h2>
            </div>
            <p className="text-[#5D4037]/80 mb-4">
              Give us a call for takeout orders or questions
            </p>
            <a 
              href="tel:9512891580"
              className="inline-flex items-center gap-2 bg-[#5D4037] text-white px-6 py-3 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              <Phone className="w-4 h-4" />
              (951) 289-1580
            </a>
          </div>
        </div>
      </section>
      
      {/* Hours */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#FFF8F0] rounded-2xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-[#5D4037]">Hours of Operation</h2>
            </div>
            
            <div className="space-y-3 max-w-md mx-auto">
              {hours.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex justify-between items-center py-3 border-b border-[#5D4037]/10 last:border-0"
                >
                  <span className="text-[#5D4037]">{item.day}</span>
                  <span className="text-[#5D4037]/70">{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-[#FFB6C1]/20 rounded-xl text-center">
              <p className="text-[#5D4037]">
                <strong>Open Daily!</strong> We're here 7 days a week to serve you.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16 px-4 bg-[#FFFAF5]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#5D4037] mb-12 text-center">Services Available</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🍽️</div>
              <h3 className="text-[#5D4037] mb-2">Dine-In</h3>
              <p className="text-[#5D4037]/70">
                Enjoy your meal in our cozy, family-friendly atmosphere
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="text-4xl mb-4">🥡</div>
              <h3 className="text-[#5D4037] mb-2">Takeout</h3>
              <p className="text-[#5D4037]/70">
                Call ahead and pick up your order to enjoy at home
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[#5D4037] mb-8 text-center">Find Us on the Map</h2>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.7!2d-117.2286!3d33.8047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ4JzE3LjAiTiAxMTfCsDEzJzQzLjAiVw!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Crepes N Cravings Location"
            />
          </div>
        </div>
      </section>
      
      {/* Future Online Ordering */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFB6C1] to-[#B0E0E6]">
        <div className="max-w-4xl mx-auto text-center text-[#5D4037]">
          <h2 className="mb-6">Ready to Visit?</h2>
          <p className="mb-8 text-xl">
            Stop by today or call ahead for takeout. We can't wait to serve you!
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
          
          <div className="mt-12 p-6 bg-white/50 backdrop-blur-sm rounded-xl">
            <Mail className="w-8 h-8 text-[#5D4037] mx-auto mb-3" />
            <p className="text-[#5D4037]/80">
              <strong>Online Ordering Coming Soon!</strong><br />
              Stay tuned for the ability to order ahead online.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
