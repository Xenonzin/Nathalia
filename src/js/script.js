// =======================================================
// LÓGICA DO CONTADOR DE TEMPO
// =======================================================

const dataInicio = new Date("2025-09-15T12:44:00");

function atualizarContador() {
    const agora = new Date();
    let diferencaMs = agora.getTime() - dataInicio.getTime();

    if (diferencaMs < 0) {
        document.getElementById('dias').textContent = '0';
        document.getElementById('horas').textContent = '0';
        document.getElementById('minutos').textContent = '0';
        document.getElementById('segundos').textContent = '0';
        return;
    }

    const msPorSegundo = 1000;
    const msPorMinuto = msPorSegundo * 60;
    const msPorHora = msPorMinuto * 60;
    const msPorDia = msPorHora * 24;

    const dias = Math.floor(diferencaMs / msPorDia);
    diferencaMs %= msPorDia;

    const horas = Math.floor(diferencaMs / msPorHora);
    diferencaMs %= msPorHora;

    const minutos = Math.floor(diferencaMs / msPorMinuto);
    diferencaMs %= msPorMinuto;

    const segundos = Math.floor(diferencaMs / msPorSegundo);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

atualizarContador();
setInterval(atualizarContador, 1000);


// =======================================================
// LÓGICA DE REVELAÇÃO DO CONTEÚDO INICIAL
// =======================================================

function revelarConteudo() {
    const overlay = document.getElementById('overlay-surprise');
    const conteudo = document.getElementById('conteudo-principal');

    // Retorna se o overlay não existe ou já foi revelado
    if (!overlay || overlay.dataset.revealed === "true") return;
    overlay.dataset.revealed = "true";
    overlay.classList.add('revealing');

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        conteudo.style.display = 'block';
        overlay.classList.remove('revealing');

        // Abre automaticamente a primeira aba ("O Amor da minha Vida todinha")
        const primeiraAba = document.querySelector('.tab-link');
        if (primeiraAba) {
            // Cria um objeto de evento simulado, como se tivesse clicado no botão
            openTab({ currentTarget: primeiraAba }, 'FotosDela');
        }
    }, 600);
}

// Tecla Enter ou Espaço também revelam o conteúdo
document.addEventListener('keydown', function (e) {
    const overlay = document.getElementById('overlay-surprise');
    if (!overlay) return;
    // Verifica se o overlay está visível e a tecla pressionada
    if ((e.key === 'Enter' || e.key === ' ') && getComputedStyle(overlay).display !== 'none') {
        e.preventDefault();
        revelarConteudo();
    }
});


// =======================================================
// LÓGICA DO MODAL (ZOOM DA IMAGEM)
// =======================================================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

function closeModal() {
    modal.style.display = "none";
}

const span = document.getElementsByClassName("close")[0];
if (span) {
    span.onclick = function(event) { 
      event.stopPropagation();
      closeModal();
    }
}


// =======================================================
// LÓGICA DAS ABAS (TABS)
// =======================================================
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    const tablinks = document.getElementsByClassName("tab-link");

    // Esconde todos os conteúdos
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove o "active" de todos os botões
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra a aba selecionada
    const tabToShow = document.getElementById(tabName);
    if (tabToShow) {
        tabToShow.style.display = "block";
    }

    // Marca o botão clicado como ativo
    if(evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    } else {
        // Se a chamada não veio de um clique (ex: inicialização), encontra o botão
        const link = document.querySelector(`.tab-link[onclick*="'${tabName}'"]`);
        if (link) link.classList.add("active");
    }
}
