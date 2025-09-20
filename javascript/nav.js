// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const body = document.body;
let isMenuOpen = false;

// Toggle menu function
function toggleMenu() {
  isMenuOpen = !isMenuOpen;

  // Toggle classes
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  body.classList.toggle("menu-open");

  // Update aria-expanded for accessibility
  hamburger.setAttribute("aria-expanded", isMenuOpen);
}

// Event listeners
hamburger.addEventListener("click", toggleMenu);

// Close menu when clicking on menu links
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-links a");
mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });
});

// Close menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
  if (e.target === mobileMenu) {
    toggleMenu();
  }
});

// Handle window resize
window.addEventListener("resize", () => {
  if (window.innerWidth > 1023 && isMenuOpen) {
    toggleMenu();
  }
});

// Prevent menu from staying open on orientation change
window.addEventListener("orientationchange", () => {
  if (isMenuOpen) {
    setTimeout(() => {
      if (window.innerWidth > 1023) {
        toggleMenu();
      }
    }, 500);
  }
});
