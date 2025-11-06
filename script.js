let selectedItem = null;

document.addEventListener("DOMContentLoaded", () => {
  fetch("menu_data.json")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("menu-container");
      data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-item");
        card.innerHTML = `
          <img src="${item.image}" alt="${item.name}">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <h4>₹${item.price}</h4>
          <button class="order-btn">Order Now</button>
        `;
        container.appendChild(card);

        card.querySelector(".order-btn").addEventListener("click", () => {
          selectedItem = item;
          document.getElementById("orderModal").style.display = "block";
          document.getElementById("confirmationMessage").innerText = "";
        });
      });
    });

  // Close modal
  document.getElementById("closeModal").onclick = () => {
    document.getElementById("orderModal").style.display = "none";
  };

  // Handle form submission
  document.getElementById("orderForm").addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("customerName").value;
    const qty = document.getElementById("quantity").value;
    const address = document.getElementById("address").value;

    document.getElementById("confirmationMessage").innerText =
      `✅ Order placed for ${qty} ${selectedItem.name}(s) by ${name}! Delivery to: ${address}`;
  });
});
