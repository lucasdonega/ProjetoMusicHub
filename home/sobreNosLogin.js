const botaoVoltar = document.getElementById("voltar");

botaoVoltar.addEventListener("click", function(event) {

    event.preventDefault();

    window.location.href = "homeLogin.html";
});