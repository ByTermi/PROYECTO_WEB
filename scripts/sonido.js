/*
function reproducirSonido() {
    const audio = new Audio('../audio/bloop.mp3'); // Cambia la ruta al archivo de sonido deseado
    audio.play();
}

// Asignar la función al evento "mouseover" del elemento
const elemento = document.querySelector('.cardBox');
elemento.addEventListener('mouseover', reproducirSonido);

// Variables para el control del cooldown
let lastActionTime = new Date();
const cooldownTime = 500; // Tiempo de cooldown en milisegundos (5 segundos)

// Función para reproducir el sonido
function reproducirSonido() {
    const audio = new Audio('../audio/bloop.mp3'); // Cambia la ruta al archivo de sonido deseado
    audio.play();
}

// Asignar la función al evento "mouseover" del elemento
const elemento = document.querySelector('.cardBox');
elemento.addEventListener('mouseover', () => {
    const now = new Date();
    const timeElapsed = now - lastActionTime;

    if (timeElapsed >= cooldownTime) {
        reproducirSonido();
        lastActionTime = now; // Actualizar el tiempo de la última acción
    } else {
        console.log(`Espera un poco antes de volver a hacer clic (${(cooldownTime - timeElapsed) / 1000} segundos restantes).`);
    }
});*/
// Variables globales
let lastActionTime = new Date();
const cooldownTime = 500; // Tiempo de cooldown en milisegundos (Medio segundo)

// Función para reproducir el sonido
function reproducirSonido() {
    const audio = new Audio('../audio/bloop.mp3'); // Cambia la ruta al archivo de sonido deseado
    audio.play();
}

// Obtener todos los elementos con la clase ".cardBox"
const elementos = document.querySelectorAll('.cardBox');

// Asignar la función al evento "mouseover" de cada elemento
elementos.forEach((elemento) => {
    elemento.addEventListener('mouseover', () => {
        let now = new Date();
        let timeElapsed = now - lastActionTime;

        if (timeElapsed >= cooldownTime) {
            reproducirSonido();
            lastActionTime = now; // Actualizar el tiempo de la última acción
        }
    });
});
