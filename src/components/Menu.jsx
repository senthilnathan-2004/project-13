import React from 'react';
import './Menu.css';

const menuItems = [
  {
    category: "Quick Bites",
    items: [
      { name: "Coffee / Tea", price: "₹1*", desc: "Our signature ₹1 Tea offer to hang out" },
      { name: "Cheese Bread Omelette", price: "₹50", desc: "Cheesy goodness starting your day right" },
      { name: "Crispy Corn", price: "₹69", desc: "Perfectly spiced crunchy sweet corn" },
      { name: "Popcorn Chicken", price: "₹89", desc: "Bite-sized crispy chicken pieces" }
    ]
  },
  {
    category: "Burger & Fries Mania",
    items: [
      { name: "Aloo Tikki Burger", price: "₹69", desc: "Classic Indian style street burger" },
      { name: "CC Chicken Burger", price: "₹109", desc: "Our house special loaded chicken burger" },
      { name: "Cheese Peri Peri Fries", price: "₹89", desc: "Spicy fries loaded with melted cheese" },
      { name: "Chicken Loaded Fries", price: "₹99", desc: "Fries topped with chicken chunks and sauces" }
    ]
  },
  {
    category: "Momos & Maggi Zone",
    items: [
      { name: "Veg Momos", price: "₹69", desc: "Steamed dumplings with fresh veggies" },
      { name: "Chicken Peri Peri Momos", price: "₹99", desc: "Spiced chicken momos pan-fried" },
      { name: "Peri Peri Maggi", price: "₹45", desc: "Everyone's favorite maggi with a spicy twist" },
      { name: "Tandoori Maggi", price: "₹60", desc: "Smoky tandoori flavored noodles" }
    ]
  },
  {
    category: "Beverages & Sweets",
    items: [
      { name: "Blue Lagoon Mojito", price: "₹79", desc: "Refreshing blue curacao mocktail" },
      { name: "Cold Coffee", price: "₹79", desc: "Thick, creamy, and chilled to perfection" },
      { name: "Hazelnut Cold Coffee", price: "₹99", desc: "Premium cold coffee with hazelnut hints" },
      { name: "Hot Brownie with Ice Cream", price: "₹99", desc: "Sizzling brownie topped with vanilla" }
    ]
  }
];

const Menu = () => {
  return (
    <section id="menu" className="menu-section">
      <h2 className="section-title text-gradient fade-in">Our Menu</h2>
      <div className="menu-grid">
        {menuItems.map((category, idx) => (
          <div key={idx} className="menu-category glass-panel glass-panel-hover fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
            <div className="category-header">
              <h3 className="category-title">{category.category}</h3>
            </div>
            <div className="category-items">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="menu-item">
                  <div className="menu-item-top">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price text-gradient">{item.price}</span>
                  </div>
                  <p className="item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="menu-cta fade-in" style={{animationDelay: "0.5s"}}>
        <button className="btn-primary">Download Full Menu</button>
      </div>
    </section>
  );
};

export default Menu;
