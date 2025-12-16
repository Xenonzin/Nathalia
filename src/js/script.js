// =======================================================
// CONTADOR DA CONVERSA (ORIGINAL)
// =======================================================

const dataInicio = new Date("2025-09-15T12:44:00");

// =======================================================
// CONTADOR DO NAMORO (NOVO)
// =======================================================

const dataNamoro = new Date("2025-12-13T14:30:00");

function atualizarContador() {
    const agora = new Date();
    let diferencaMs = agora.getTime() - dataInicio.getTime();

    if (diferencaMs < 0) diferencaMs = 0;

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

function atualizarContadorNamoro() {
    const agora = new Date();
    let diferencaMs = agora.getTime() - dataNamoro.getTime();

    if (diferencaMs < 0) diferencaMs = 0;

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

    document.getElementById('n-dias').textContent = dias;
    document.getElementById('n-horas').textContent = horas;
    document.getElementById('n-minutos').textContent = minutos;
    document.getElementById('n-segundos').textContent = segundos;
}

atualizarContador();
atualizarContadorNamoro();
setInterval(atualizarContador, 1000);
setInterval(atualizarContadorNamoro, 1000);

// =======================================================
// OVERLAY
// =======================================================

function revelarConteudo() {
    const overlay = document.getElementById('overlay-surprise');
    const conteudo = document.getElementById('conteudo-principal');

    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
        conteudo.style.display = 'block';

        const primeiraAba = document.querySelector('.tab-link');
        if (primeiraAba) {
            openTab({ currentTarget: primeiraAba }, 'FotosDela');
        }
    }, 600);
}

// =======================================================
// MODAL
// =======================================================

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("img01");

function openModal(img) {
    modal.style.display = "block";
    modalImg.src = img.src;
}

function closeModal() {
    modal.style.display = "none";
}

// =======================================================
// ABAS
// =======================================================

function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tab-content");
    const tablinks = document.getElementsByClassName("tab-link");

    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}
