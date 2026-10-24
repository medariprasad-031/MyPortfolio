// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach(link =>
  link.addEventListener("click", () => navMenu.classList.remove("open"))
);

// Typing effect
const words = ["Web Developer", "Student", "Problem Solver"];
const typingEl = document.getElementById("typing");
let wordIndex = 0, charIndex = 0, deleting = false;

function type() {
  const word = words[wordIndex];
  typingEl.textContent = word.substring(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1200);
  } else if (charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    deleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}
type();

// Highlight active nav link while scrolling
const sections = document.querySelectorAll("#home, #education, #about, #projects");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "home";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach(link =>
    link.classList.toggle("active", link.getAttribute("href") === "#" + current)
  );
});

// Scroll reveal animation
const revealTargets = document.querySelectorAll(".timeline-item, .about-content, .card");
revealTargets.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealTargets.forEach(el => observer.observe(el));

// Click the photo to preview a different image from your computer
const photo = document.getElementById("profilePhoto");
const photoInput = document.getElementById("photoInput");
photo.addEventListener("click", () => photoInput.click());
photoInput.addEventListener("change", () => {
  const file = photoInput.files[0];
  if (file) photo.src = URL.createObjectURL(file);
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
