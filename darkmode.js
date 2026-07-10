/*=========================================
  DARK MODE
=========================================*/

const botaoDark = document.createElement("button");

botaoDark.innerHTML = "🌙";

botaoDark.id = "darkMode";

document.body.appendChild(botaoDark);

// Estilo do botão

botaoDark.style.position = "fixed";
botaoDark.style.bottom = "95px";
botaoDark.style.right = "30px";
botaoDark.style.width = "50px";
botaoDark.style.height = "50px";
botaoDark.style.borderRadius = "50%";
botaoDark.style.border = "none";
botaoDark.style.cursor = "pointer";
botaoDark.style.fontSize = "22px";
botaoDark.style.background = "#222";
botaoDark.style.color = "#fff";
botaoDark.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";
botaoDark.style.zIndex = "999";

// Verifica se já existe preferência salva

const temaSalvo = localStorage.getItem("tema");

if(temaSalvo === "dark"){

    document.body.classList.add("dark-mode");

    botaoDark.innerHTML = "☀️";

}

// Alternar tema

botaoDark.addEventListener("click", ()=>{

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        localStorage.setItem("tema","dark");

        botaoDark.innerHTML="☀️";

    }else{

        localStorage.setItem("tema","light");

        botaoDark.innerHTML="🌙";

    }

});