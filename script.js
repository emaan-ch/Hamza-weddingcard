const slides = document.querySelectorAll(".slide");
const previousButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const counter = document.getElementById("counter");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");

  document.body.classList.remove(
    "theme-mehndi",
    "theme-barat",
    "theme-walima"
  );

  document.body.classList.add(
    "theme-" + slides[index].dataset.theme
  );

  counter.textContent =
    String(index + 1).padStart(2, "0") + " / " +
    String(slides.length).padStart(2, "0");
}

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

previousButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});

showSlide(currentSlide);

const welcomeScreen = document.getElementById("welcomeScreen");
const openInvitationButton = document.getElementById("openInvitation");

openInvitationButton.addEventListener("click", () => {
  document.body.classList.add("invitation-open");
  welcomeScreen.classList.add("closing");

  setTimeout(() => {
    welcomeScreen.style.display = "none";
  }, 800);
});