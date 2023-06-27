const postsContent = document.getElementById("posts");
/*
  {
    //Post
    img: "",
    data: "",
    titulo: "",
    paragrafo:
      "",
    link: "",
  },
*/
const posts = [];

let conteudoPost = "";
for (let n = 0; n <= posts.length; n++) {
  conteudoPost +=
    '<a href="' +
    posts[n].link +
    '" class="item">\n' +
    '<img class="img-post" src="./img/' +
    posts[n].img +
    '" alt="" />\n' +
    '<span class="data-post">' +
    posts[n].data +
    "</span>\n" +
    '<h4 class="title-post">' +
    posts[n].titulo +
    "</h4>\n" +
    '<p class="content-post">' +
    posts[n].paragrafo +
    "</p>\n" +
    "</a>\n";
  postsContent.innerHTML = conteudoPost;
}

/*


imgPost.setAttribute("src", posts[n].img);
  dataPost.innerText = posts[n].data;
  titlePost.innerText = posts[n].titulo;
  contentPost.innerText = posts[n].paragrafo;
  linkBtn.innerText = posts[n].link;
*/
