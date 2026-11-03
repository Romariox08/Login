
const senha = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");
const loginForm = document.getElementById("loginForm");
const mensagem = document.getElementById("mensagem");

// Mostrar ou ocultar senha
toggleSenha.addEventListener("click", function () {

    if (senha.type === "password") {
        senha.type = "text";
        toggleSenha.textContent = "Ocultar";
    } else {
        senha.type = "password";
        toggleSenha.textContent = "Mostrar";
    }

});

// Envio do formulário
loginForm.addEventListener("submit", function (event) {

    event.preventDefault();

    mensagem.style.color = "#16a34a";
    mensagem.textContent = "Formulário preenchido com sucesso!";

});
