// Variables globales
let modoSandbox = false; // Variable que indica si el juego está en modo sandbox

// Función para activar o desactivar el modo sandbox
function toggleSandbox() {
    modoSandbox = !modoSandbox; // Invertir el estado del modo sandbox
    actualizarInterfaz();
}

// Función para mostrar el mensaje de sandbox
function mostrarMensaje(mensaje) {
    const mensajeSandbox = document.getElementById("mensajeSandbox");
    mensajeSandbox.textContent = mensaje;
    mensajeSandbox.style.display = "block";
}

// Función para ocultar el mensaje de sandbox
function ocultarMensaje() {
    const mensajeSandbox = document.getElementById("mensajeSandbox");
    mensajeSandbox.style.display = "none";
}

// Función para actualizar la interfaz de usuario según el modo sandbox
function actualizarInterfaz() {
    if (modoSandbox) {
        // Mostrar mensaje de modo sandbox
        mostrarMensaje("Modo Sandbox activado. ¡Experimenta libremente!");
    } else {
        // Ocultar mensaje de modo sandbox
        ocultarMensaje();
    }
}

// Evento para escuchar cambios en la casilla de verificación o botón
document.getElementById("sandboxToggle").addEventListener("change", toggleSandbox);

// Llama a actualizarInterfaz al cargar la página para establecer el estado inicial
window.onload = function () {
    actualizarInterfaz();
};

function jugarCarta(carta) {
    // Aplicar una animación cuando se juega la carta
    carta.classList.add("jugarAnimacion");

    // Esperar un momento antes de eliminar la carta (puedes ajustar el tiempo)
    setTimeout(function () {
        carta.remove();
    }, 500); // 500 milisegundos (0.5 segundos) es un ejemplo
}

function robarCarta() {
    const cartaMazo = document.querySelector(".carta-mazo-inicial");
    if (cartaMazo) {
        cartaMazo.classList.remove("carta-mazo-inicial");
        cartaMazo.classList.add("carta-robar");
    }
}
