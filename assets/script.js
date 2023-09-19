const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const textP = document.querySelector(".principal_text");
const dots = document.querySelector(".dots");
let imageIndex = 0;
let nbSlides = slides.length - 1;

document.querySelectorAll(".dot").forEach(function (indicator, index) {
  indicator.addEventListener("click", function () {
    bannerImg.src = `./assets/images/slideshow/${slides[index].image}`;
    textP.innerHTML = `${slides[index].tagLine}`;
    document.querySelector(".dot_selected").classList.remove("dot_selected");
    indicator.classList.add("dot_selected");
  });
});

function rightBanner() {
  imageIndex++;
  if (imageIndex > nbSlides) {
    imageIndex = 0;
    bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
    textP.innerHTML = `${slides[imageIndex].tagLine}`;
  } else {
    bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
    textP.innerHTML = `${slides[imageIndex].tagLine}`;
  }
  console.log(dots.children[imageIndex]);
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  dots.children[imageIndex].classList.add("dot_selected");
}

function leftBanner() {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = nbSlides;
    bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
    textP.innerHTML = `${slides[imageIndex].tagLine}`;
  } else {
    bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
    textP.innerHTML = `${slides[imageIndex].tagLine}`;
  }
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  dots.children[imageIndex].classList.add("dot_selected");
}

leftArrow.addEventListener("click", leftBanner);
rightArrow.addEventListener("click", rightBanner);

setInterval(() => {
  imageIndex++;
  if (imageIndex > nbSlides) {
    imageIndex = 0;
    bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
    textP.innerHTML = `${slides[imageIndex].tagLine}`;
  }
  bannerImg.src = `./assets/images/slideshow/${slides[imageIndex].image}`;
  textP.innerHTML = `${slides[imageIndex].tagLine}`;
  document.querySelector(".dot_selected").classList.remove("dot_selected");
  dots.children[imageIndex].classList.add("dot_selected");
}, 5000);
