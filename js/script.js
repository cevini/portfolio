function scrollToTop() {
  window.scrollTo({ top: 0, behavior: smooth });
}

//Slide Tag (Posts / Portfólio)

const content = document.querySelector(".content");
const postsBtn = document.querySelector(".posts-btn");
const portfolioBtn = document.querySelector(".portfolio-btn");

function moveToRight() {
  content.style.transform = "translateX(-100vw)";
  portfolioBtn.style.background = "#b5b5b5";
  postsBtn.style.background = "#dfdfdf";
}
function moveToLeft() {
  content.style.transform = "translateX(0vw)";
  postsBtn.style.background = "#b5b5b5";
  portfolioBtn.style.background = "#dfdfdf";
}

//Img Social

const socialBtn1 = document.querySelector(".btn-social1");
const socialBtn2 = document.querySelector(".btn-social2");
const socialBtn3 = document.querySelector(".btn-social3");

function showSocialBtn() {
  socialBtn1.style.transform = "translateY(-8rem)";
  socialBtn2.style.transform = "translateY(-7rem) translateX(-4rem)";
  socialBtn3.style.transform = "translateY(-7rem) translateX(4rem)";
}
