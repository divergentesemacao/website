//Organizador de Fragmentos de Texto
async function loadFragment(fragmentId) {
    try {
        const response = await fetch(`../frag/${fragmentId}.html`);
        const html = await response.text();
        document.getElementById('fragment-container').innerHTML = html;
    } catch (error) {
        console.error('Erro ao carregar fragmento HTML:', error);
    }
}

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

