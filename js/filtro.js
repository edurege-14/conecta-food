// filtro da vitrine de doacoes (pagina doacoes.html)
const botoesFiltro = document.querySelectorAll(".filtro-botao");
const doacoes = document.querySelectorAll(".doacao");
const contador = document.getElementById("contador");
const avisoVazio = document.getElementById("aviso-vazio");

botoesFiltro.forEach(function (botao) {
    botao.addEventListener("click", function () {
        const categoriaEscolhida = botao.getAttribute("data-categoria");
        let quantidade = 0;

        // tira o destaque de todos os botoes e coloca so no clicado
        botoesFiltro.forEach(function (outroBotao) {
            outroBotao.classList.remove("ativo");
        });
        botao.classList.add("ativo");

        // mostra a doacao se ela for da categoria escolhida (ou se escolheu "todas")
        doacoes.forEach(function (doacao) {
            const categoriaDoacao = doacao.getAttribute("data-categoria");

            if (categoriaEscolhida === "todas" || categoriaDoacao === categoriaEscolhida) {
                doacao.classList.remove("escondido");
                quantidade++;
            } else {
                doacao.classList.add("escondido");
            }
        });

        // atualiza o contador e mostra o aviso se nenhuma doacao apareceu
        contador.textContent = "Doações encontradas: " + quantidade;

        if (quantidade === 0) {
            avisoVazio.classList.remove("escondido");
        } else {
            avisoVazio.classList.add("escondido");
        }
    });
});
