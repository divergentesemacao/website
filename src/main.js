import './css/output.css'

document.querySelector('#comp-menu').innerHTML = `

`
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

