export function Gallery() {
  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1762637449801-dfa656b5ca73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2VldCUyMGNyZXBlcyUyMGRlc3NlcnR8ZW58MXx8fHwxNzY0OTEzNTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Sweet Crepe",
      category: "Crepes"
    },
    {
      url: "https://images.unsplash.com/photo-1648962492952-e50aa990cfdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2xsZWQlMjBpY2UlMjBjcmVhbXxlbnwxfHx8fDE3NjQ5NzUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Rolled Ice Cream",
      category: "Ice Cream"
    },
    {
      url: "https://images.unsplash.com/photo-1580568183078-5f3464ac07e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pJTIwcGFuY2FrZXMlMjBicmVha2Zhc3R8ZW58MXx8fHwxNzY0OTc1MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Mini Pancakes",
      category: "Pancakes"
    },
    {
      url: "https://images.unsplash.com/photo-1517415815224-8d6555d3a998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYXZvcnklMjBjcmVwZSUyMGZvb2R8ZW58MXx8fHwxNzY0OTc1MTI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Savory Crepe",
      category: "Crepes"
    },
    {
      url: "https://images.unsplash.com/photo-1593536488177-1eb3c2d4e3d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjBjb3p5fGVufDF8fHx8MTc2NDg5ODA2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Our Cozy Interior",
      category: "Atmosphere"
    },
    {
      url: "https://images.unsplash.com/photo-1673960898896-3403e402a4fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcnVpdCUyMGRlc3NlcnQlMjBwbGF0dGVyfGVufDF8fHx8MTc2NDk3NTEyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Fresh Fruit Platter",
      category: "Snacks"
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#5D4037] to-[#4A2C24] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-[#FFB6C1]">Gallery</h1>
          <p className="text-xl opacity-95">
            A visual journey through our delicious creations and cozy atmosphere
          </p>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl shadow-lg aspect-square cursor-pointer hover:shadow-2xl transition-shadow"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm mb-1 text-[#FFB6C1]">{image.category}</p>
                    <h3 className="text-white">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Instagram CTA */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#5D4037] mb-4">Share Your Experience</h2>
          <p className="text-[#5D4037]/80 mb-8 text-lg">
            Tag us in your photos when you visit! We love seeing our customers enjoy their treats.
          </p>
          <div className="bg-gradient-to-r from-[#FFB6C1] to-[#B0E0E6] text-[#5D4037] px-8 py-4 rounded-full inline-block">
            #CrepesNCravings
          </div>
        </div>
      </section>
      
      {/* Visit CTA */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#FFB6C1] to-[#B0E0E6]">
        <div className="max-w-4xl mx-auto text-center text-[#5D4037]">
          <h2 className="mb-6">Create Your Own Sweet Memories</h2>
          <p className="mb-8 text-xl">
            Visit us today and taste the difference!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              Get Directions
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
