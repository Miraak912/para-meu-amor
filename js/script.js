const botaoFlor = document.querySelector("#botao-flor");

const inicio = document.querySelector("#inicio");

const mensagem = document.querySelector("#mensagem");

const musica = document.querySelector("#musica");

const botaoMusica = document.querySelector("#botao-musica");


let animacaoIniciada = false;

let intervaloAnimacao;



botaoFlor.addEventListener("click", function () {

    inicio.style.display = "none";

    mensagem.classList.add("ativo");


    musica.volume = 0.45;


    musica.play().catch(function () {

        botaoMusica.textContent = "▶ Tocar música";

    });


    if (!animacaoIniciada) {

        iniciarAnimacao();

        animacaoIniciada = true;

    }


    setTimeout(function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 100);

});



botaoMusica.addEventListener("click", function () {

    if (musica.paused) {

        musica.play();

        botaoMusica.textContent = "⏸ Pausar música";

    } else {

        musica.pause();

        botaoMusica.textContent = "▶ Tocar música";

    }

});



function iniciarAnimacao() {

    for (let i = 0; i < 14; i++) {

        setTimeout(function () {

            criarElemento();

        }, i * 100);

    }


    intervaloAnimacao = setInterval(function () {

        criarElemento();

    }, 220);

}



function criarElemento() {

    const elementos = [
        "💙",
        "🤍",
        "🌸",
        "✨",
        "💕",
        "🕯️"
    ];


    const elemento = document.createElement("div");


    elemento.classList.add("elemento");


    const numeroAleatorio = Math.floor(
        Math.random() * elementos.length
    );


    elemento.textContent =
        elementos[numeroAleatorio];


    elemento.style.left =
        Math.random() * 96 + "vw";


    const tamanho =
        Math.random() * 18 + 15;


    elemento.style.fontSize =
        tamanho + "px";


    const duracao =
        Math.random() * 5 + 6;


    elemento.style.animationDuration =
        duracao + "s";


    elemento.style.opacity =
        Math.random() * 0.35 + 0.55;


    document.body.appendChild(elemento);


    setTimeout(function () {

        elemento.remove();

    }, duracao * 1000);

}