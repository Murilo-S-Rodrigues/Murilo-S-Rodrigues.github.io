document.addEventListener("DOMContentLoaded", function() {
    // Elementos principais
    const linkCursos = document.querySelector('a[href="#cursos"]');
    const linkInicio = document.querySelector('nav a[href="#inicio"]');
    const linkSobre = document.querySelector('a[href="#sobre"]');
    const logoLink = document.querySelector('.logo a');
    const secaoInicio = document.getElementById("inicio");
    const secaoCursos = document.getElementById("cursos");
    const secaoSobre = document.getElementById("sobre");
    const botaoVoltar = document.getElementById("voltar-topo");

    // Configuração inicial - mostra apenas o início
    secaoInicio.style.display = "block";
    secaoCursos.style.display = "none";
    secaoSobre.style.display = "none";

    // Mostrar cursos (oculta início e sobre)
    linkCursos.addEventListener("click", function(e) {
        e.preventDefault();
        secaoInicio.style.display = "none";
        secaoCursos.style.display = "block";
        secaoSobre.style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" }); // Volta ao topo antes de mostrar
        botaoVoltar.style.display = "block";
    });

    // Mostrar sobre (oculta início e cursos)
    linkSobre.addEventListener("click", function(e) {
        e.preventDefault();
        secaoInicio.style.display = "none";
        secaoCursos.style.display = "none";
        secaoSobre.style.display = "block";
        window.scrollTo({ top: 0, behavior: "smooth" }); // Volta ao topo antes de mostrar
        botaoVoltar.style.display = "block";
    });

    // Função para voltar ao topo (mostra apenas início)
    function voltarAoTopo(e) {
        if(e) e.preventDefault();
        secaoInicio.style.display = "block";
        secaoCursos.style.display = "none";
        secaoSobre.style.display = "none";
        window.scrollTo({ top: 0, behavior: "smooth" });
        botaoVoltar.style.display = "none";
    }

    // Eventos de clique
    linkInicio.addEventListener("click", voltarAoTopo);
    logoLink.addEventListener("click", voltarAoTopo);
    botaoVoltar.addEventListener("click", voltarAoTopo);

    // Mostrar/esconder botão "Voltar" baseado na posição de rolagem
    window.addEventListener("scroll", function() {
        if (window.scrollY < 100) {
            botaoVoltar.style.display = "none";
        } else {
            botaoVoltar.style.display = "block";
        }
    });
});

function createMusicalNotes() {
    const notesContainer = document.createElement('div');
    notesContainer.className = 'musical-notes-bg';
    document.body.appendChild(notesContainer);

    const musicalSymbols = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    
    for (let i = 0; i < 20; i++) {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = musicalSymbols[Math.floor(Math.random() * musicalSymbols.length)];
        
        note.style.left = `${Math.random() * 100}%`;
        note.style.top = `${Math.random() * 100}%`;
        
        const size = 20 + Math.random() * 30;
        note.style.fontSize = `${size}px`;
        note.style.opacity = 0.1 + Math.random() * 0.4;
        
        if (Math.random() > 0.5) {
            note.classList.add(Math.random() > 0.5 ? 'vibrate-1' : 'vibrate-2');
        }
        
        notesContainer.appendChild(note);
        
        setInterval(() => {
            if (Math.random() > 0.7) {
                note.classList.toggle('vibrate-1');
            }
            if (Math.random() > 0.7) {
                note.classList.toggle('vibrate-2');
            }
            // Atualiza a cor conforme o tema
            note.style.color = document.body.classList.contains('dark-mode') 
                ? 'rgba(255, 255, 255, 0.6)' 
                : 'rgba(255, 0, 0, 0.6)';
        }, 3000 + Math.random() * 5000);
    }
}

// Chama a função quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', createMusicalNotes);

// Efeito de pulsação e flutuação no botão do WhatsApp
function animateWhatsAppButton() {
    const whatsappButton = document.querySelector('.whatsapp-button');
    
    // Combina as duas animações
    whatsappButton.style.animation = 'pulse 2s infinite, float 3s infinite';
    
    // Aleatoriza um pouco o timing para parecer mais natural
    setTimeout(() => {
        whatsappButton.style.animationDuration = `${2 + Math.random() * 1}s, ${3 + Math.random() * 2}s`;
    }, 5000);
    
    // Muda periodicamente a intensidade
    setInterval(() => {
        const randomPulse = 1.5 + Math.random() * 0.5;
        const randomFloat = 3 + Math.random() * 2;
        whatsappButton.style.animation = `pulse ${randomPulse}s infinite, float ${randomFloat}s infinite`;
    }, 8000);
}

// Chama as funções quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Suas outras funções existentes...
    animateWhatsAppButton();
    createMusicalNotes();
    // Não precisa chamar novamente o dark mode aqui pois já está no listener
});


// Dark/Light Mode Toggle com imagens
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Verifica o tema salvo ou preferência do sistema
    const savedTheme = localStorage.getItem('theme') || 
                      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    // Aplica o tema
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Alternador de temas
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Salva a preferência
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        
        // Atualiza as notas musicais
        updateNotesColor();
    });
    
    // Função para atualizar cor das notas
    function updateNotesColor() {
        const notes = document.querySelectorAll('.note');
        notes.forEach(note => {
            note.style.color = document.body.classList.contains('dark-mode') 
                ? 'rgba(255, 255, 255, 0.6)' 
                : 'rgba(255, 0, 0, 0.6)';
        });
    }
});