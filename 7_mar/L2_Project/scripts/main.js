// JSON data for carousel slides
const carouselData = [
  {
    id: 1,
    name: "Exquisite Wristwatch",
    brand: "Gold Luxury",
    some: " Choose Us",
    description:
      "Discover the Perfect Watch foe Every Occasion and Elevate Your Style with Timelesss Elegance and Precision Craftsmanship -watch",
    price: "$499.00",
    image: "/images/Group 4.png",
    backgroundColor: "#f9d5a7",
  },
  {
    id: 2,
    name: "Dainty Timepieces",
    brand: "Luxury Co",
    some: " Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elgance and Precision Craftsmanship -watch",
    price: "$469.00",
    image: "/images/Group 5.png",
    backgroundColor: "#d2d2d2",
  },
  {
    id: 3,
    name: "Elegant Timepieces",
    brand: "Luxury Co",
    some: " Choose Us",
    description:
      "Discover the Perfect Watch foe Every Occasion and Elevate Your Style with Timelesss Elegance and Precision Craftsmanship -watch",
    price: "$529.00",
    image: "/images/Group 6.png",
    backgroundColor: "#8ed1a3",
  },
  {
    id: 4,
    name: "Refined Timepieces",
    brand: "Luxury Co",
    some: " Choose Us",
    description:
      "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elgance and Precision Craftsmanship -watch",
    price: "$599.00",
    image: "/images/Group 7.png",
    backgroundColor: "#f8a2a2",
  },
];

// Initialize carousel
let currentSlide = 0;
const carouselContainer = document.querySelector(".carousel-container");

// Function to create carousel slides
function createCarouselSlides() {
  carouselData.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("carousel-slide");
    if (index === 0) slideElement.classList.add("active");

    slideElement.innerHTML = `
            <div class="product-info">
                <h2>${slide.name}</h2>
                <h3>${slide.brand},  <span><h4> ${slide.some}</h4></span></h3>
                <p>${slide.description}  </p>
                <div class="product-price">${slide.price}</div>
            </div>
            <img src="${slide.image}" alt="${slide.name}" class="product-image">
             
    <div class="social-icons">
        <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://twitter.com" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
    </div>

        `;

    carouselContainer.appendChild(slideElement);
  });

  // Create carousel navigation
  const carouselNav = document.createElement("div");
  carouselNav.classList.add("carousel-nav");
  carouselNav.innerHTML = `
        <button class="prev-btn">◀</button>
        <button class="next-btn">▶</button>
    `;
  carouselContainer.appendChild(carouselNav);

  // Create carousel dots
  const dotsContainer = document.createElement("div");
  dotsContainer.classList.add("carousel-dots");
  carouselData.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dot.dataset.index = index;
    if (index === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });
  carouselContainer.appendChild(dotsContainer);

  // Set initial background color
  document.body.style.backgroundColor = carouselData[0].backgroundColor;
}

// Function to navigate to a specific slide
function goToSlide(index) {
  if (index === currentSlide) return; // Prevent redundant transitions

  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");

  // Remove active class and add fade-out animation
  slides[currentSlide].classList.remove("active");
  slides[currentSlide].classList.add("fade-out");

  // Add fade-in animation to the new slide
  slides[index].classList.add("active");
  slides[index].classList.add("fade-in");

  // Reset animation classes after transition
  setTimeout(() => {
    slides[currentSlide].classList.remove("fade-out");
    slides[index].classList.remove("fade-in");
  }, 800);

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");

  // Update background color
  document.body.style.backgroundColor = carouselData[index].backgroundColor;

  currentSlide = index;
}

// Create slides on page load
document.addEventListener("DOMContentLoaded", () => {
  createCarouselSlides();

  // Navigation event listeners
  document.querySelector(".prev-btn").addEventListener("click", () => {
    const newIndex =
      (currentSlide - 1 + carouselData.length) % carouselData.length;
    goToSlide(newIndex);
  });

  document.querySelector(".next-btn").addEventListener("click", () => {
    const newIndex = (currentSlide + 1) % carouselData.length;
    goToSlide(newIndex);
  });

  // Event delegation for dots
  document.querySelector(".carousel-dots").addEventListener("click", (e) => {
    if (e.target.classList.contains("dot")) {
      const index = parseInt(e.target.dataset.index);
      goToSlide(index);
    }
  });
});

// Smooth auto-slide functionality
// setInterval(() => {
//   const newIndex = (currentSlide + 1) % carouselData.length;
//   goToSlide(newIndex);
// }, 500000); // Change slides every 5 seconds

// Smooth transition styles
const style = document.createElement("style");
style.innerHTML = `
    .fade-in {
        animation: fadeIn 0.8s ease-in-out forwards;
    }
    
    .fade-out {
        animation: fadeOut 0.8s ease-in-out forwards;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; transform: translateX(50px); }
        to { opacity: 1; transform: translateX(0); }
    }
    
    @keyframes fadeOut {
        from { opacity: 1; transform: translateX(0); }
        to { opacity: 0; transform: translateX(-50px); }
    }
`;
document.head.appendChild(style);

