const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(image => {
  image.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = image.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});