// menu hamburguer do celular
const menuBotao = document.getElementById("menu-botao");
const menu = document.getElementById("menu");

menuBotao.addEventListener("click", function () {
    // coloca ou tira a classe "aberto" (o css mostra ou esconde o menu)
    menu.classList.toggle("aberto");

    // avisa leitores de tela se o menu esta aberto ou fechado
    if (menu.classList.contains("aberto")) {
        menuBotao.setAttribute("aria-expanded", "true");
        menuBotao.setAttribute("aria-label", "Fechar menu");
    } else {
        menuBotao.setAttribute("aria-expanded", "false");
        menuBotao.setAttribute("aria-label", "Abrir menu");
    }
});
