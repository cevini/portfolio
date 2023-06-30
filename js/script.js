const root = document.querySelector(":root");
const tema = document.querySelector(".slider");

function mudarTema() {
  console.log("click");
  if (root.style.getPropertyValue("--branco") === "#000") {
    root.style.setProperty("--branco", "#fff");
    root.style.setProperty("--preto", "#000");
  } else {
    root.style.setProperty("--branco", "#000");
    root.style.setProperty("--preto", "#fff");
  }
}
tema.addEventListener("click", () => mudarTema());

//ScrollTop

let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  scrollTop.classList.toggle("scroll-active", window.scrollY >= 200);
});

//AutoTyping .subtitle
var typed = new Typed(".auto-type", {
  strings: ["programador iniciante", "designer amador", "músico"],
  typeSpeed: 50,
  backSpeed: 30,
  loop: true,
});

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
