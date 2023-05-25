const botaoAlterarTema = document.getElementById("botao-alterar-tema")

const elementoBody = document.querySelector("body")

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const pokeBolaLogo = document.querySelector(".logo")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = elementoBody.classList.contains("modo-escuro")

    elementoBody.classList.toggle("modo-escuro")

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
        pokeBolaLogo.setAttribute("src", "./src/imagens/pokeball.png")
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")
        pokeBolaLogo.setAttribute("src", "./src/imagens/pokebola.png")
    }
})