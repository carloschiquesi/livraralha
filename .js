function mostrarLivros() {
    document.getElementById("paginaInicial").style.display = "none";
    document.getElementById("livros").style.display = "block";
}

function fazerLogin() {
    document.getElementById("paginaInicial").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
}

function mostrarDetalhesLivro(idLivro) {
    // Suponha que haja um banco de dados ou uma API para buscar os detalhes do livro com base no ID
    var nomeLivro = "Nome do Livro " + idLivro;
    var autorLivro = "Autor do Livro " + idLivro;
    var descricaoLivro = "Descrição do Livro " + idLivro;

    document.getElementById("nomeLivro").textContent = nomeLivro;
    document.getElementById("autorLivro").textContent = autorLivro;
    document.getElementById("descricaoLivro").textContent = descricaoLivro;

    document.getElementById("livros").style.display = "none";
    document.getElementById("detalhesLivro").style.display = "block";
}

function editarLivro() {
    // Aqui você implementaria a lógica para permitir a edição do livro
    alert("Você está editando o livro!");
}

document.getElementById("formLogin").addEventListener("submit", function(event) {
    // Aqui você implementaria a lógica para verificar o login
    event.preventDefault(); // Evita que o formulário seja enviado
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    alert("Usuário: " + username + ", Senha: " + password);
    // Supondo que o login seja válido, redirecionar para a página inicial
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("paginaInicial").style.display = "block";
});
