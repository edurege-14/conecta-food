// acordeao das perguntas frequentes (pagina faq.html)
const itensFaq = document.querySelectorAll(".acordeao-item");

itensFaq.forEach(function (item) {
    const pergunta = item.querySelector(".acordeao-pergunta");
    const icone = item.querySelector(".acordeao-icone");

    pergunta.addEventListener("click", function () {
        // coloca ou tira a classe "aberto" (o css mostra ou esconde a resposta)
        item.classList.toggle("aberto");

        // troca o sinal e avisa leitores de tela se a resposta esta aberta ou fechada
        if (item.classList.contains("aberto")) {
            icone.textContent = "-";
            pergunta.setAttribute("aria-expanded", "true");
        } else {
            icone.textContent = "+";
            pergunta.setAttribute("aria-expanded", "false");
        }
    });
});
