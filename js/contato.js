// validacao do formulario de contato (pagina contato.html)
const formulario = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoAssunto = document.getElementById("assunto");
const campoMensagem = document.getElementById("mensagem");
const mensagemSucesso = document.getElementById("mensagem-sucesso");

// deixa o campo vermelho e escreve o erro embaixo dele
function mostrarErro(campo, texto) {
    campo.classList.add("campo-erro");
    document.getElementById("erro-" + campo.id).textContent = texto;
}

// volta o campo ao normal e apaga o erro
function limparErro(campo) {
    campo.classList.remove("campo-erro");
    document.getElementById("erro-" + campo.id).textContent = "";
}

// o e-mail precisa ter algo antes do @ e um ponto depois dele (ex.: nome@site.com)
function emailValido(email) {
    const posicaoArroba = email.indexOf("@");
    const posicaoPonto = email.lastIndexOf(".");

    if (posicaoArroba > 0 && posicaoPonto > posicaoArroba + 1 && posicaoPonto < email.length - 1) {
        return true;
    } else {
        return false;
    }
}

formulario.addEventListener("submit", function (evento) {
    // impede a pagina de recarregar ao enviar
    evento.preventDefault();

    let tudoCerto = true;
    mensagemSucesso.classList.add("escondido");

    // trim() tira os espacos do comeco e do fim
    if (campoNome.value.trim() === "") {
        mostrarErro(campoNome, "Preencha o seu nome.");
        tudoCerto = false;
    } else {
        limparErro(campoNome);
    }

    if (campoEmail.value.trim() === "") {
        mostrarErro(campoEmail, "Preencha o seu e-mail.");
        tudoCerto = false;
    } else if (emailValido(campoEmail.value.trim()) === false) {
        mostrarErro(campoEmail, "Digite um e-mail válido, como nome@exemplo.com.");
        tudoCerto = false;
    } else {
        limparErro(campoEmail);
    }

    if (campoAssunto.value === "") {
        mostrarErro(campoAssunto, "Escolha um assunto.");
        tudoCerto = false;
    } else {
        limparErro(campoAssunto);
    }

    if (campoMensagem.value.trim() === "") {
        mostrarErro(campoMensagem, "Escreva a sua mensagem.");
        tudoCerto = false;
    } else {
        limparErro(campoMensagem);
    }

    // so mostra o sucesso se nenhum campo deu erro
    if (tudoCerto) {
        mensagemSucesso.classList.remove("escondido");
        formulario.reset();
    }
});
