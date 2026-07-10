/*=========================================
  TCC - IA no Poder Judiciário
  Autor: Cauã Cardoso
==========================================*/

console.log("Site carregado com sucesso!");

/*=========================
 BOTÃO VOLTAR AO TOPO
=========================*/

// Cria o botão
const btnTopo = document.createElement("button");

btnTopo.innerHTML = "↑";

btnTopo.id = "btnTopo";

document.body.appendChild(btnTopo);

// Estilo do botão

btnTopo.style.position = "fixed";
btnTopo.style.bottom = "30px";
btnTopo.style.right = "30px";
btnTopo.style.width = "50px";
btnTopo.style.height = "50px";
btnTopo.style.border = "none";
btnTopo.style.borderRadius = "50%";
btnTopo.style.background = "#0d6efd";
btnTopo.style.color = "#fff";
btnTopo.style.fontSize = "22px";
btnTopo.style.cursor = "pointer";
btnTopo.style.display = "none";
btnTopo.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
btnTopo.style.zIndex = "999";

// Mostrar botão

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        btnTopo.style.display = "block";

    }else{

        btnTopo.style.display = "none";

    }

});

// Voltar ao topo

btnTopo.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=========================
 DATA NO RODAPÉ
=========================*/

const ano = new Date().getFullYear();

document.querySelectorAll("footer").forEach((footer)=>{

    footer.innerHTML +=
    `<p>Atualizado em ${ano}</p>`;

});


/*=========================
 ANIMAÇÃO DOS CARDS
=========================*/

const cards = document.querySelectorAll(".card");

cards.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*=========================
 MENSAGEM DO FORMULÁRIO
=========================*/

const formulario = document.querySelector("form");

if(formulario){

formulario.addEventListener("submit",function(e){

e.preventDefault();

alert("Mensagem enviada com sucesso! Obrigado pelo contato.");

formulario.reset();

});

}


/*=========================
 EFEITO NOS BOTÕES
=========================*/

const botoes = document.querySelectorAll(".btn");

botoes.forEach((botao)=>{

botao.addEventListener("mouseover",()=>{

botao.style.opacity=".9";

});

botao.addEventListener("mouseout",()=>{

botao.style.opacity="1";

});

});


/*=========================
 SAUDAÇÃO
=========================*/

const hora = new Date().getHours();

let saudacao = "";

if(hora < 12){

saudacao = "Bom dia!";

}else if(hora < 18){

saudacao = "Boa tarde!";

}else{

saudacao = "Boa noite!";

}

console.log(saudacao);


/*=========================
 CONTADOR DE VISITAS
=========================*/

let visitas = localStorage.getItem("visitas");

if(visitas == null){

visitas = 1;

}else{

visitas++;

}

localStorage.setItem("visitas", visitas);

console.log("Número de visitas:", visitas);