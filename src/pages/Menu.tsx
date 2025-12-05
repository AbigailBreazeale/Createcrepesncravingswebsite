export function Menu() {
  const menuCategories = [
    {
      name: "Sweet Crepes",
      description: "Indulge in our delicious sweet crepes",
      items: [
        { name: "Nutella Crepe", description: "Classic crepe with rich Nutella spread" },
        { name: "Strawberry Delight", description: "Fresh strawberries, whipped cream, and chocolate drizzle" },
        { name: "Banana Split Crepe", description: "Sliced bananas, ice cream, chocolate, and caramel" },
        { name: "Berry Bliss", description: "Mixed berries with cream and powdered sugar" },
        { name: "S'mores Crepe", description: "Chocolate, marshmallow, and graham cracker crumbs" },
        { name: "Caramel Apple", description: "Warm apples with caramel sauce and cinnamon" }
      ]
    },
    {
      name: "Savory Crepes",
      description: "Hearty and delicious savory options",
      items: [
        { name: "Ham & Cheese", description: "Classic combination with premium ham and melted cheese" },
        { name: "Chicken & Mushroom", description: "Grilled chicken with sautéed mushrooms and cream sauce" },
        { name: "Spinach & Feta", description: "Fresh spinach with feta cheese and herbs" },
        { name: "Turkey Club", description: "Turkey, bacon, lettuce, tomato, and mayo" },
        { name: "Vegetarian Delight", description: "Assorted fresh vegetables with cheese" },
        { name: "Breakfast Crepe", description: "Eggs, cheese, and your choice of meat" }
      ]
    },
    {
      name: "Rolled Ice Cream",
      description: "Freshly rolled before your eyes",
      items: [
        { name: "Banana Rolled Ice Cream", description: "Banana ice cream with whipped cream and toppings" },
        { name: "Strawberry Dream", description: "Fresh strawberry ice cream rolled to perfection" },
        { name: "Cookies & Cream", description: "Oreo cookies blended into creamy vanilla ice cream" },
        { name: "Chocolate Lover", description: "Rich chocolate ice cream with chocolate chips" },
        { name: "Mango Tango", description: "Tropical mango ice cream with fresh fruit" },
        { name: "Matcha Green Tea", description: "Japanese matcha ice cream with sweet red beans" }
      ]
    },
    {
      name: "Mini Pancakes",
      description: "Fluffy and fun bite-sized treats",
      items: [
        { name: "Classic Mini Pancakes", description: "Served with butter and maple syrup" },
        { name: "Chocolate Chip", description: "Loaded with chocolate chips" },
        { name: "Blueberry", description: "Fresh blueberries in every bite" },
        { name: "Cinnamon Sugar", description: "Dusted with sweet cinnamon sugar" },
        { name: "Nutella Mini Pancakes", description: "Topped with Nutella and powdered sugar" },
        { name: "Strawberry Shortcake", description: "With fresh strawberries and whipped cream" }
      ]
    },
    {
      name: "Snacks & Drinks",
      description: "Perfect additions to your meal",
      items: [
        { name: "Fruit Cup", description: "Fresh seasonal fruit salad" },
        { name: "Churros", description: "Cinnamon sugar churros with chocolate sauce" },
        { name: "Milkshakes", description: "Vanilla, chocolate, or strawberry" },
        { name: "Fresh Lemonade", description: "House-made lemonade" },
        { name: "Hot Chocolate", description: "Rich and creamy with whipped cream" },
        { name: "Coffee & Tea", description: "Freshly brewed selections" }
      ]
    }
  ];
  
  return (
    <div className="min-h-screen bg-[#FFFAF5]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#5D4037] to-[#4A2C24] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-4 text-[#FFB6C1]">Our Menu</h1>
          <p className="text-xl opacity-95">
            Discover our delicious selection of crepes, ice cream, and treats
          </p>
        </div>
      </section>
      
      {/* Menu Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="mb-8 text-center">
                <h2 className="text-[#5D4037] mb-2">{category.name}</h2>
                <p className="text-[#5D4037]/70">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item, itemIdx) => (
                  <div 
                    key={itemIdx} 
                    className="p-4 rounded-lg border border-[#FFB6C1]/30 hover:border-[#FFB6C1] hover:shadow-md transition-all"
                  >
                    <h3 className="text-[#5D4037] mb-1">{item.name}</h3>
                    <p className="text-sm text-[#5D4037]/70">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 px-4 bg-[#FFF8F0]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#5D4037] mb-4">Ready to Order?</h2>
          <p className="mb-8 text-[#5D4037]/80 text-lg">
            Visit us for dine-in or call ahead for takeout
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:9512891580" 
              className="bg-[#FFB6C1] text-[#5D4037] px-8 py-4 rounded-full hover:bg-[#ff9fad] transition-colors"
            >
              Call to Order
            </a>
            <a 
              href="/contact" 
              className="bg-[#5D4037] text-white px-8 py-4 rounded-full hover:bg-[#4A2C24] transition-colors"
            >
              Visit Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
