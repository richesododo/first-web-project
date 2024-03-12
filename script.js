document
  .getElementById("build-price")
  .addEventListener("click", function () {});

document.getElementById("discover").addEventListener("click", function () {});

document.querySelector(".hamburger").addEventListener("click", function () {
  var menu = document.querySelector(".nav-menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

let slideIndex = 0;
showSlides();

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  //resetTimer();
}

let slideTimer = setInterval(showSlides, 5000);
function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(showSlides, 5000);
}
