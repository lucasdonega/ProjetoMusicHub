const botaoIncrever = document.getElementById("increver");
const botaoVoltar = document.getElementById("entrar");

botaoIncrever.addEventListener("click", function(event) {

    event.preventDefault();

    window.location.href = "cadastro_usuario.html";
});

botaoVoltar.addEventListener("click", function(event) {

    event.preventDefault();

    window.location.href = "homeLogin.html";
});