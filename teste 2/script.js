document.addEventListener("DOMContentLoaded", function() {
    const linkCursos = document.querySelector('a[href="#cursos"]');
    const linkInicio = document.querySelector('nav a[href="#inicio"]'); // Correção aqui!
    const logoLink = document.querySelector('.logo a');
    const secaoCursos = document.getElementById("cursos");
    const botaoVoltar = document.getElementById("voltar-topo");

    // Mostra cursos e botão ao clicar em "#cursos"
    linkCursos.addEventListener("click", function(e) {
        e.preventDefault();
        secaoCursos.style.display = "block";
        secaoCursos.scrollIntoView({ behavior: "smooth" });
        botaoVoltar.style.display = "block";
    });

    // Função para voltar ao topo e fechar cursos
    function voltarAoTopo(e) {
        e.preventDefault();
        const primeiroH1 = document.querySelector("h1");
        primeiroH1.scrollIntoView({ 
            behavior: "smooth",
            block: "start"
        });
        secaoCursos.style.display = "none"; // Fecha os cursos
        botaoVoltar.style.display = "none"; // Esconde o botão "Voltar"
    }

    // Adiciona o evento aos elementos
    linkInicio.addEventListener("click", voltarAoTopo);
    logoLink.addEventListener("click", voltarAoTopo);
    botaoVoltar.addEventListener("click", voltarAoTopo);

    // Mostra/esconde o botão "Voltar" conforme a rolagem
    window.addEventListener("scroll", function() {
        if (window.scrollY < 100) {
            botaoVoltar.style.display = "none";
        } else {
            botaoVoltar.style.display = "block";
        }
    });
});