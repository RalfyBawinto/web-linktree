document.addEventListener("DOMContentLoaded", function () {
  const backgrounds = document.querySelectorAll(".background-container .bg");
  let currentIndex = 0;

  setInterval(() => {
    backgrounds[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % backgrounds.length;
    backgrounds[currentIndex].classList.add("active");
  }, 5000); // Ganti background setiap 5 detik
});
