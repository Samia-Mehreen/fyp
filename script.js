// Smooth scroll
function scrollToFleet() {
  document.getElementById("fleet").scrollIntoView({ behavior: "smooth" });
}



// Cart logic
let cart = [];

function addToCart(item, price) {
  cart.push({ name: item, price });
  updateCartUI();
}

function updateCartUI() {
  const cartCount = document.getElementById("cart-count");
  const cartItems = document.getElementById("cart-items");
  const totalPrice = document.getElementById("total-price");

  cartCount.textContent = cart.length;

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
  });

  totalPrice.textContent = `Total: $${total}`;
}

function toggleCart() {
  document.getElementById("cartSidebar").classList.toggle("open");
}

function checkout() {
  alert("Thanks for your booking! We’ll contact you shortly.");
  cart = [];
  updateCartUI();
  toggleCart();
}

// Animation on scroll
const fadeElements = document.querySelectorAll(".fade-in");

function showOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  fadeElements.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);


