function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

function navigateTo(section) {
    const content = document.getElementById('content');
    content.style.display = 'block';

    if (section === 'liga') {
        content.innerHTML = `
            <h2>Liga - Temporada 24/25</h2>
            <ul>
                <li onclick="loadMatchDetails(1)">Jornada 1</li>
                <li onclick="loadMatchDetails(2)">Jornada 2</li>
                <li onclick="loadMatchDetails(3)">Jornada 3</li>
                <li onclick="loadMatchDetails(4)">Jornada 4</li>
                <li onclick="loadMatchDetails(5)">Jornada 5</li>
                <li onclick="loadMatchDetails(6)">Jornada 6</li>
            </ul>
        `;
    } else if (section === 'copa') {
        content.innerHTML = `
            <h2>Copa - Temporada 23/24</h2>
            <ul>
                <li onclick="loadMatchDetails(1)">Jornada 1</li>
                <li onclick="loadMatchDetails(2)">Jornada 2</li>
                <li onclick="loadMatchDetails(3)">Jornada 3</li>
            </ul>
        `;
    } else if (section === 'aficion') {
        showGallery();
    }
}

function showGallery() {
    const content = document.getElementById('content');
    content.style.display = 'none';
    const galleryHTML = `
        <div class="gallery">
            <button class="close-gallery" onclick="closeGallery()">X</button>
            <button class="nav-button prev" onclick="changeSlide(-1)">&#10094;</button>
            <button class="nav-button next" onclick="changeSlide(1)">&#10095;</button><img src="assets/aficion1.jpg" class="active">
            <img src="assets/aficion2.jpg">
            <img src="assets/aficion3.jpg">
            <img src="assets/aficion4.jpg">
            <img src="assets/aficion5.jpg">
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', galleryHTML);
}

let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelectorAll('.gallery img');
    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + direction + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function closeGallery() {
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        gallery.remove(); // Elimina la galería del DOM
    }
    const content = document.getElementById('content');
    content.style.display = 'block'; // Vuelve a mostrar el contenido normal
}

function toggleSubmenu(id) {
    const submenu = document.getElementById(id);
    submenu.classList.toggle('active'); // Alterna la visibilidad del submenú
}

function showMatch(jornada) {
    // Crear un contenedor para mostrar la imagen en pantalla completa
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen');

    fullscreenContainer.innerHTML = `
        <button class="close-fullscreen" onclick="closeFullscreen()">X</button>
        <img src="assets/partido${jornada}.png" alt="Partido ${jornada}" style="width:100%;height:auto;">
    `;

    // Agregar el contenedor al body
    document.body.appendChild(fullscreenContainer);
}

function showCup(jornada) {
    // Crear un contenedor para mostrar la imagen en pantalla completa
    const fullscreenContainer = document.createElement('div');
    fullscreenContainer.classList.add('fullscreen');

    fullscreenContainer.innerHTML = `
        <button class="close-fullscreen" onclick="closeFullscreen()">X</button>
        <img src="assets/copa${jornada}.png" alt="Copa Jornada ${jornada}" style="width:100%;height:auto;">
    `;

    // Agregar el contenedor al body
    document.body.appendChild(fullscreenContainer);
}

function closeFullscreen() {
    // Eliminar el contenedor de pantalla completa
    const fullscreenContainer = document.querySelector('.fullscreen');
    if (fullscreenContainer) {
        fullscreenContainer.remove();
    }
}




