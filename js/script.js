// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const line3 = document.getElementById("line3");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;
  mobileMenu.classList.toggle("hidden");

  if (isOpen) {
    line1.style.transform = "rotate(45deg) translateY(8px)";
    line2.style.opacity = "0";
    line3.style.transform = "rotate(-45deg) translateY(-8px)";
  } else {
    line1.style.transform = "";
    line2.style.opacity = "1";
    line3.style.transform = "";
  }
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    isOpen = false;
    line1.style.transform = "";
    line2.style.opacity = "1";
    line3.style.transform = "";
  });
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target) && isOpen) {
    mobileMenu.classList.add("hidden");
    isOpen = false;
    line1.style.transform = "";
    line2.style.opacity = "1";
    line3.style.transform = "";
  }
});
