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
