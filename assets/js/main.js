function initScrollSuave() {
  //selecionando o menu
  const menu = document.querySelectorAll(".header-menu li a");
  // função do Smooth scroll
  function smoothScroll(e) {
    //previnindo padrão dos links
    e.preventDefault();
    //selecionando href através do currentTarget
    const href = e.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    //metódo nativo do js pra ter o efeito de scroll suave.
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
  //adicionando evento de click aos links do menu
  menu.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
}

initScrollSuave();
//Mostrar o elemento quando der scroll na página */

const scrollReveal = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true,
});

scrollReveal.reveal(
  `
.hero,
.wrapper,
.about,
.cases-section,
.success,
.contact,
.footer`,
  { interval: 100 }
);

const btnMobile = document.getElementById("btnMobile");

function toggleMenu(event) {
  if (event.type === "touchstart") {
    event.preventDefault();
  }
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
}
btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

const carousel = document.querySelector(".js-carousel");

new Glider(carousel, {
  slidesToShow: 1.1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-dots",
  arrows: {
    prev: ".js-button-prev",
    next: ".js-button-next",
  },
  scrollLock: true,
});
