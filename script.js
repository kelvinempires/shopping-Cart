

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  //   responsive breakpoint
  breakpoint: {
    0: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 1,
    },
  },
});
const love1El = document.getElementById("love1")
const span1El = document.getElementById("span1");
const span2El = document.getElementById("span2");
const numberEL = document.getElementById("number");
const minusBtnEl = document.getElementById("minusBtn");
const addBtnEL = document.getElementById("addBtn");
const addToCartEl = document.getElementById("addToCart");
const btnEl = document.querySelector(".btn");
const bigImageEl = document.getElementById("bigImage");
const SmallImage1 = document.getElementById("user-image-1");
const SmallImage2 = document.getElementById("user-image-2");
const SmallImage3 = document.getElementById("user-image-3");
const SmallImage4 = document.getElementById("user-image-4");
const SmallImage5 = document.getElementById("user-image-5");
const SmallImage6 = document.getElementById("user-image-6");
const SmallImage7 = document.getElementById("user-image-7");
const SmallImage8 = document.getElementById("user-image-8");

SmallImage1.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075404.png";
});
SmallImage2.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074812.png";
});
SmallImage3.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074836.png";
});
SmallImage4.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 074922.png";
});
SmallImage5.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075012.png";
});
SmallImage6.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075032.png";
});
SmallImage7.addEventListener("click", function () {
  bigImageEl.src = "./image oraimo/Screenshot 2024-10-06 075051.png";
});

  love1El.addEventListener("click", function () {
    if (love1El.style.color === "red") {
      love1El.style.color = "rgba(255, 140, 0, 0.196)";
    } else {
      love1El.style.color = "red";
    }
  });

const cart = () => {
  addToCartEl.style.display = "none";
  btnEl.style.display = "flex";
  btnEl.style.color = "darkblue";
  love1 .style.display = "none"
};
addToCartEl.addEventListener("click", cart);

addBtnEL.addEventListener("click", function () {
  value++;
  numberEL.textContent = value;
  addBtnEL.style.backgroundColor = "darkorange";
  minusBtnEl.style.backgroundColor = "rgba(255, 140, 0, 0.235)";
});

let value = 1;

minusBtnEl.addEventListener("click", cart);
minusBtnEl.addEventListener("click", function () {
  value--;
  numberEL.textContent = value;
  addBtnEL.style.backgroundColor = "rgba(255, 140, 0, 0.235)";
  minusBtnEl.style.backgroundColor = "darkorange";
});
