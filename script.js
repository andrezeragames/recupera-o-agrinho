const botaoContraste =
    document.getElementById("contraste");

const botaoAumentarTexto =
    document.getElementById("aumentarTexto");

const opcoes =
    document.querySelectorAll(".opcao");

const mensagem =
    document.getElementById("mensagem");


/* ALTO CONTRASTE */

botaoContraste.addEventListener("click", function () {

    document.body.classList.toggle("alto-contraste");

    const ativo =
        document.body.classList.contains("alto-contraste");

    if (ativo) {

        botaoContraste.textContent =
            "Desativar contraste";

    } else {

        botaoContraste.textContent =
            "Alto contraste";

    }

});


/* AUMENTAR TEXTO */

let textoAumentado = false;

botaoAumentarTexto.addEventListener("click", function () {

    if (!textoAumentado) {

        document.documentElement.style.fontSize = "115%";

        botaoAumentarTexto.textContent =
            "Texto normal";

        textoAumentado = true;

    } else {

        document.documentElement.style.fontSize = "100%";

        botaoAumentarTexto.textContent =
            "Aumentar texto";

        textoAumentado = false;

    }

});


/* INTERAÇÃO COM DOM */

opcoes.forEach(function (opcao) {

    opcao.addEventListener("click", function () {

        mensagem.textContent =
            "✓ Excelente! Essa atitude contribui para uma tecnologia mais inclusiva.";

        mensagem.setAttribute(
            "aria-live",
            "polite"
        );

    });

});
