//Portfólio (Filter)

let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for(let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('active');
    }
    this.classList.add('active');

    let dataFilter = this.getAttribute('data-filter');

    for( let k = 0; k<itemBox.length; k++){
      itemBox[k].classList.remove('active');
      itemBox[k].classList.add('hide');

      if(itemBox[k].getAttribute('data-item') == dataFilter ||
      dataFilter == "tudo"){
        itemBox[k].classList.remove('hide');
        itemBox[k].classList.add('active')
      }
    }
  })
}

//Contato (Sistema de envio de email e validação)

function validate() {
  let name = document.querySelector(".name")
  let email = document.querySelector(".email")
  let msg = document.querySelector(".message")
  let sendBtn = document.querySelector(".send-btn")

  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if(name.value == "" || email.value == "" || msg.value == ""){
      emptyerror();
    } else{
      sendmail (name.value, email.value, msg.value);
      success();
    }
  })
}
validate();

function sendmail(name,email,msg){
  emailjs.send("service_h0ob2bm","template_gn4bv8f",{
    from_name: email,
    to_name: name,
    message: msg,
  });
}

function emptyerror(){
  swal({
    title: "Deu erro, hein?",
    text: "Preencha todos os campos.",
    icon: "error",
  })
}
function success(){
  swal({
    title: "Foi!",
    text: "Em breve darei retorno :)",
    icon: "success",
  })
}

//Efeito scroll para cada item da Barra de navegação

const menuItems = document.querySelectorAll('.menu li');

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.target);
  scrollToPosition(to);
}

function scrollToPosition(to){
  // window.scroll({
  //   top: to,
  //   behavior: "smooth",
  // });
  smoothScrollTo(0, to);
}


function getScrollTopByHref(element){
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

        /**
     * Smooth scroll animation
     * @param {int} endX: destination x coordinate
     * @param {int} endY: destination y coordinate
     * @param {int} duration: animation duration in ms
     */
    function smoothScrollTo(endX, endY, duration) {
      const startX = window.scrollX || window.pageXOffset;
      const startY = window.scrollY || window.pageYOffset;
      const distanceX = endX - startX;
      const distanceY = endY - startY;
      const startTime = new Date().getTime();

      duration = typeof duration !== 'undefined' ? duration : 600;

      // Easing function
      const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
        return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
      };

      const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
          clearInterval(timer);
        }
        window.scroll(newX, newY);
      }, 1000 / 60); // 60 fps
    };
