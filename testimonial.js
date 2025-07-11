const testimonials = [
  {
    name: "Sarah Lawson",
    type: "Yacht",
    rating: 5,
    message: "An unforgettable luxury experience. The crew was incredibly professional and the yacht was pristine.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "James Wright",
    type: "Speedboat",
    rating: 5,
    message: "Booking a speedboat was so easy! We had the best time cruising around the bay.",
    image: "https://randomuser.me/api/portraits/men/33.jpg"
  },
  {
    name: "Emily Tran",
    type: "Sailboat",
    rating: 5,
    message: "Sailing with MarinaFleet was smooth from start to finish. Beautiful views and elegant boat.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

function renderTestimonials(filter = "all") {
  const grid = document.getElementById("testimonialGrid");
  grid.innerHTML = "";
  testimonials
    .filter(t => filter === "all" || t.type.toLowerCase() === filter.toLowerCase())
    .forEach(t => {
      const card = document.createElement("div");
      card.className = "testimonial-card";
      card.innerHTML = `
        <img src="${t.image}" alt="${t.name}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover;">
        <h4>${t.name}</h4>
        <p class="stars">${"⭐".repeat(t.rating)}</p>
        <p>${t.message}</p>
      `;
      grid.appendChild(card);
    });
}

function filterTestimonials(type) {
  renderTestimonials(type);
}

document.addEventListener("DOMContentLoaded", () => {
  renderTestimonials();
  showOnScroll(); // animation support
});

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Optional: Add animation
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

// Review submission form
document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll("input, textarea, select");
  const [name, type, message, rating] = [...inputs].map(i => i.value);
  testimonials.push({
    name,
    type,
    rating: parseInt(rating),
    message,
    image: "https://randomuser.me/api/portraits/lego/1.jpg"
  });
  renderTestimonials();
  this.reset();
  alert("Thank you for your feedback!");
});
