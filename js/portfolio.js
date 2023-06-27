const portfolioContent = document.getElementById("portfolio");
/*
  {
    img: "",
    categoria: "",
    titulo: "",
    link: "",
  },
*/
const portfolio = [
  {
    img: "banner-primos-2.jpg",
    categoria: "banner",
    titulo: "Os Primos Acústico | Belo Horizonte",
    link: "https://www.sympla.com.br/os-primos-acustico---edicao-belo-horizonte__1988311",
  },
  {
    img: "seguimotas.png",
    categoria: "website",
    titulo: "Seguimotas | Comunidade",
    link: "https://seguimotas.netlify.app/",
  },
  {
    img: "alex.png",
    categoria: "website",
    titulo: "Alexandre Marcelino | Portfólio",
    link: "https://ale-marcelino.netlify.app/",
  },
  {
    img: "zara.png",
    categoria: "website",
    titulo: "Matheus Zaramello | Portfólio",
    link: "https://cevini.github.io/zara-portfolio/",
  },
  {
    img: "thumb-sasame.png",
    categoria: "vídeo",
    titulo: "Clipe Surpresa Sasamecosplay ft. Luiza Caspary",
    link: "https://www.youtube.com/watch?v=7nPoZzHoY8A&t=68s",
  },
  {
    img: "banner-primos.png",
    categoria: "banner",
    titulo: "Os Primos Acústico | Maceió",
    link: "https://www.instagram.com/p/CWJLDBqrGXB/",
  },
];

let conteudoPortfolio = "";

for (let n = 0; n <= portfolio.length; n++) {
  conteudoPortfolio +=
    '<div class="item">' +
    '<img src="./img/' +
    portfolio[n].img +
    '" alt="" />' +
    '<div class="item-layer">' +
    "<h5>" +
    portfolio[n].categoria +
    "</h5>" +
    "<span>" +
    portfolio[n].titulo +
    "</span>" +
    '<a href="' +
    portfolio[n].link +
    '" class="btn">Conferir</a>' +
    "</div>" +
    "</div>\n";
  portfolioContent.innerHTML = conteudoPortfolio;
}
