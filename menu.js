/*=========================================
  MENU.JS
  TCC - IA no Poder Judiciário
=========================================*/

// Espera a página carregar
document.addEventListener("DOMContentLoaded", () => {

    // ============================
    // Destacar página atual
    // ============================

    const links = document.querySelectorAll(".navbar-nav .nav-link");

    const paginaAtual = window.location.pathname.split("/").pop();

    links.forEach(link => {

        const href = link.getAttribute("href");

        if(href === paginaAtual){

            link.classList.add("active");

        }else{

            link.classList.remove("active");

        }

    });

    // ============================
    // Fechar menu no celular
    // ============================

    const menu = document.querySelector(".navbar-collapse");

    const menuBootstrap = menu ? new bootstrap.Collapse(menu, {
        toggle: false
    }) : null;

    links.forEach(link => {

        link.addEventListener("click", () => {

            if(window.innerWidth < 992 && menu.classList.contains("show")){

                menuBootstrap.hide();

            }

        });

    });

    // ============================
    // Navbar muda ao rolar
    // ============================

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 80){

            navbar.classList.add("shadow");

        }else{

            navbar.classList.remove("shadow");

        }

    });

});