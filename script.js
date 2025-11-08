const menuItems = [
  { name: "Chicken Biryani", price: 180, image: "images/biryani.jpg" },
  { name: "Veg Biryani", price: 150, image: "images/veg_biryani.jpg" },
  { name: "Pizza", price: 220, image: "images/pizza.jpg" },
  { name: "Ice Cream Cake", price: 100, image: "images/icecream_cake.jpg" },
  { name: "Cold Coffee", price: 90, image: "images/cold_coffee.jpg" },
  { name: "Chocolate Ice Cream", price: 80, image: "images/chocolate_icecream.jpg" },
  { name: "Chocolate Milkshake", price: 120, image: "images/milkshake.jpg" },
  { name: "Butterscotch Cake", price: 150, image: "images/cake.jpg" },
  { name: "Chicken Lollipops", price: 200, image: "images/lollipop.jpg" },
  { name: "Prawns Fry", price: 250, image: "images/prawns.jpg" }
];

const menuContainer = document.getElementById("menu");
const itemSelect = document.getElementById("itemSelect");

menuItems.forEach(item => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p>₹${item.price}</p>
  `;
  menuContainer.appendChild(card);

  const option = document.createElement("option");
  option.value = item.name;
  option.textContent = item.name;
  itemSelect.appendChild(option);
});

document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const quantity = document.getElementById("quantity").value;
  const item = document.getElementById("itemSelect").value;

  document.getElementById("orderMessage").textContent =
    `✅ Thank you ${name}! Your order for ${quantity} ${item}(s) will be delivered soon to ${address}.`;
  this.reset();
});
