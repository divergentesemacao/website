//Carousel
const frame = document.getElementById('frame');
const bullets = document.querySelectorAll('.bullet');
let currentIndex = 0;
const colors = ['#e5e7eb', '#d1d5db', '#9ca3af'];

function changeColor(index) {
    frame.style.backgroundColor = colors[index];
    currentIndex = index;
    updateBullets();
}

function updateBullets() {
    bullets.forEach((bullet, index) => {
        if (index === currentIndex) {
            bullet.classList.add('bg-gray-600');
            bullet.classList.remove('bg-gray-400');
        } else {
            bullet.classList.remove('bg-gray-600');
            bullet.classList.add('bg-gray-400');
        }
    });
}

function nextColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    frame.style.backgroundColor = colors[currentIndex];
    updateBullets();
}

setInterval(nextColor, 15000); // Alterna entre as cores a cada 5 segundos.

// Fecha o submenu quando clicar fora
document.addEventListener('click', function(event) {
    const details = document.querySelector('details');
    const isClickInside = details.contains(event.target);

    if (!isClickInside) {
        // Fecha o menu
        details.removeAttribute('open');
    }
});





document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("creditsContainer");
    const cards = Array.from(container.getElementsByClassName("creditCard"));
    
    // Função para embaralhar um array
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Embaralhar os cartões e renderizar na nova ordem
    shuffle(cards).forEach(card => container.appendChild(card));
});

function showSection(sectionId) {
    // Hide all sections with class 'section-content'
    document.querySelectorAll('.section-content').forEach(section => section.classList.add('hidden'));

    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
}

document.querySelectorAll('iframe').forEach(iframe => {
    iframe.addEventListener('fullscreenchange', function() {
        if (document.fullscreenElement) {
            iframe.classList.add('fullscreen');
        } else {
            iframe.classList.remove('fullscreen');
        }
    });
});

// Show the first section by default
//showSection('hiperfoco');

document.addEventListener('DOMContentLoaded', () => {
const userLang = navigator.language || navigator.userLanguage;
const currentPath = window.location.pathname;

// Verifica se a página já foi redirecionada nesta sessão
if (!sessionStorage.getItem('languageRedirected')) {
    const redirectUser = (langPath) => {
        if (currentPath !== langPath) {
            sessionStorage.setItem('languageRedirected', 'true');
            window.location.href = langPath;
        }
    };

    if (userLang.startsWith('pt')) {
        redirectUser('.pt/index.html');
    } else if (userLang.startsWith('fr')) {
        redirectUser('./fr/index.html');
    } else if (userLang.startsWith('es')) {
        redirectUser('./es/index.html');
    } else if (userLang.startsWith('de')) {
        redirectUser('./de/index.html');
    } else {
        redirectUser('./index.html');
    }
}
});