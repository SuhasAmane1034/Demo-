// Menu data (can be replaced with API or Google Sheet later)
const menu = {
  breakfast: ["Idli & Sambar", "Poha", "Upma"],
  lunch: ["Veg Thali", "Chicken Curry", "Roti & Dal"],
  snacks: ["Samosa", "Vada Pav", "Tea", "Coffee"],
  special: ["Paneer Biryani", "Falooda", "Ice Cream"]
};

// Update date
document.getElementById("date").innerText =
  new Date().toLocaleDateString("en-IN", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

// Load menu items
Object.keys(menu).forEach(category => {
  const list = document.querySelector(`#${category} ul`);
  menu[category].forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
});
