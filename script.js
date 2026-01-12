// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission
document
  .querySelector(".contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Дякуємо за вашу заявку! Ми зв'яжемося з вами найближчим часом.");
    this.reset();
  });

// Gallery item click
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", function () {
    console.log("Gallery item clicked");
  });
});
