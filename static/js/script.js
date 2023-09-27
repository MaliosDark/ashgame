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
    const jugadorActual = jugadores[turnoActual];
    const mano = jugadorActual.cartas;
    const campoDeJuego = jugadorActual.campoDeJuego;

    if (mano.includes(carta)) {
        // La carta está en la mano del jugador
        // Simulamos jugar la carta (puedes personalizar esta parte según tu lógica)
        campoDeJuego.push(carta); // Agregar la carta al campo de juego
        mano.splice(mano.indexOf(carta), 1); // Eliminar la carta de la mano del jugador

        // Actualizar la interfaz
        mostrarCartasDeJugadorActual();
        mostrarMensajeDelSistema(`${jugadorActual.nombre} ha jugado una carta.`);

        // Cambiar al siguiente turno
        siguienteTurno();
    } else {
        // La carta no está en la mano del jugador, muestra un mensaje
        mostrarMensajeDelSistema(`${jugadorActual.nombre} no puede jugar esa carta.`);
    }
}


function robarCarta() {
    const jugadorActual = jugadores[turnoActual];
    const mazo = jugadorActual.mazo;

    if (mazo.length > 0) {
        // El jugador tiene cartas en el mazo
        // Simulamos robar una carta (puedes personalizar esta parte según tu lógica)
        const cartaRobada = mazo.pop(); // Tomar la última carta del mazo
        jugadorActual.cartas.push(cartaRobada); // Agregar la carta robada a la mano del jugador

        // Actualizar la interfaz
        mostrarCartasDeJugadorActual();
        mostrarMensajeDelSistema(`${jugadorActual.nombre} ha robado una carta.`);

        // Cambiar al siguiente turno
        siguienteTurno();
    } else {
        // El jugador no tiene cartas en el mazo, muestra un mensaje
        mostrarMensajeDelSistema(`${jugadorActual.nombre} no puede robar más cartas, su mazo está vacío.`);
    }
}



// Función para enviar un mensaje
function enviarMensaje() {
    const mensajeInput = document.getElementById("chatMessage");
    const mensaje = mensajeInput.value.trim();

    if (mensaje !== "") {
        // Crear un nuevo elemento de mensaje
        const nuevoMensaje = document.createElement("div");
        nuevoMensaje.className = "message";

        // Crear elementos para el remitente y el texto del mensaje
        const remitente = document.createElement("span");
        remitente.className = "sender";
        remitente.textContent = "Jugador 1:"; // Cambia el nombre del remitente según el jugador
        const textoMensaje = document.createElement("span");
        textoMensaje.className = "text";
        textoMensaje.textContent = mensaje;

        // Agregar elementos al nuevo mensaje
        nuevoMensaje.appendChild(remitente);
        nuevoMensaje.appendChild(textoMensaje);

        // Agregar el nuevo mensaje al área de mensajes
        const chatMessages = document.querySelector(".chat-messages");
        chatMessages.appendChild(nuevoMensaje);

        // Limpiar el campo de entrada
        mensajeInput.value = "";

        // Desplazar el área de mensajes hacia abajo para mostrar el mensaje más reciente
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulación de mensaje de otro jugador (puedes eliminar esto en el juego real)
        setTimeout(simularMensajeOtroJugador, 2000);
    }
}

// Función para simular un mensaje de otro jugador
function simularMensajeOtroJugador() {
    const mensajesSimulados = [
        "¡Buena jugada!",
        "¿Alguien más tiene un hechizo listo?",
        "Esto se está poniendo interesante.",
    ];

    const mensajeAleatorio = mensajesSimulados[Math.floor(Math.random() * mensajesSimulados.length)];

    // Crear un nuevo mensaje simulado
    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.className = "message";

    // Crear elementos para el remitente y el texto del mensaje simulado
    const remitente = document.createElement("span");
    remitente.className = "sender";
    remitente.textContent = "Jugador 2:"; // Cambia el nombre del remitente simulado
    const textoMensaje = document.createElement("span");
    textoMensaje.className = "text";
    textoMensaje.textContent = mensajeAleatorio;

    // Agregar elementos al nuevo mensaje simulado
    nuevoMensaje.appendChild(remitente);
    nuevoMensaje.appendChild(textoMensaje);

    // Agregar el nuevo mensaje simulado al área de mensajes
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.appendChild(nuevoMensaje);

    // Desplazar el área de mensajes hacia abajo para mostrar el mensaje simulado más reciente
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Función para mostrar un mensaje del sistema
function mostrarMensajeDelSistema(mensaje) {
    // Crear un nuevo elemento de mensaje del sistema
    const nuevoMensaje = document.createElement("div");
    nuevoMensaje.className = "system-message";

    // Crear elemento para el texto del mensaje
    const textoMensaje = document.createElement("span");
    textoMensaje.className = "system-text";
    textoMensaje.textContent = mensaje;

    // Agregar elemento al nuevo mensaje del sistema
    nuevoMensaje.appendChild(textoMensaje);

    // Agregar el nuevo mensaje del sistema al área de mensajes
    const chatMessages = document.querySelector(".chat-messages");
    chatMessages.appendChild(nuevoMensaje);

    // Desplazar el área de mensajes hacia abajo para mostrar el mensaje más reciente
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Ejemplo de cómo mostrar un mensaje del sistema
mostrarMensajeDelSistema("¡Comienza la partida!");

// Lista de jugadores en línea (simulación)
const jugadoresEnLinea = ["Jugador 1", "Jugador 2", "Jugador 3"];

// Función para mostrar la lista de jugadores en línea
function mostrarJugadoresEnLinea() {
    const playerList = document.getElementById("playerList");
    playerList.innerHTML = ""; // Limpiar la lista

    jugadoresEnLinea.forEach((jugador) => {
        const jugadorItem = document.createElement("li");
        jugadorItem.textContent = jugador;
        playerList.appendChild(jugadorItem);
    });
}

// Llamar a la función para mostrar la lista de jugadores en línea
mostrarJugadoresEnLinea();


// Variables para el arrastre de la ventana de chat
let isDragging = false;
let offsetX, offsetY;


// Encabezado de la ventana de chat (puedes cambiar el selector si es necesario)
const chatHeader = document.querySelector(".chat-header");

// Función para iniciar el arrastre
chatHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - chatWindow.getBoundingClientRect().left;
    offsetY = e.clientY - chatWindow.getBoundingClientRect().top;
    chatWindow.style.cursor = "grabbing";
    chatWindow.style.userSelect = "none"; // Evitar la selección de texto mientras se arrastra
});

// Función para detener el arrastre
document.addEventListener("mouseup", () => {
    if (isDragging) {
        isDragging = false;
        chatWindow.style.cursor = "grab";
        chatWindow.style.userSelect = "auto"; // Restaurar la selección de texto
    }
});

// Función para arrastrar la ventana de chat
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;

    // Limitar el movimiento dentro de la ventana del juego (ajusta los valores según tu diseño)
    const maxX = window.innerWidth - chatWindow.clientWidth;
    const maxY = window.innerHeight - chatWindow.clientHeight;

    chatWindow.style.left = `${Math.min(maxX, Math.max(0, x))}px`;
    chatWindow.style.top = `${Math.min(maxY, Math.max(0, y))}px`;
});

// Encuentra la ventana de chat
const chatWindow = document.querySelector(".chat");

// Función para detener el evento de arrastre
function detenerArrastre(event) {
    event.preventDefault();
}

// Agrega un manejador de eventos al inicio del arrastre
chatWindow.addEventListener("dragstart", detenerArrastre, false);

// Agrega un manejador de eventos al soltar la ventana
chatWindow.addEventListener("dragend", detenerArrastre, false);

// Variables para el arrastre de las cartas
let isDraggingCard = false;
let currentCard = null;
let cardOffsetX, cardOffsetY;

// Función para iniciar el arrastre de una carta
function iniciarArrastreCarta(event) {
    if (isDraggingChat) return; // Evitar que se muevan las cartas si se está arrastrando el chat
    
    currentCard = event.target;
    cardOffsetX = event.clientX - currentCard.getBoundingClientRect().left;
    cardOffsetY = event.clientY - currentCard.getBoundingClientRect().top;
    isDraggingCard = true;
    
    // Agregar una clase de arrastre para dar efecto visual
    currentCard.classList.add("dragging");
}

// Función para arrastrar una carta
function arrastrarCarta(event) {
    if (!isDraggingCard) return;
    
    const x = event.clientX - cardOffsetX;
    const y = event.clientY - cardOffsetY;
    
    currentCard.style.transform = `translate(${x}px, ${y}px)`;
}

// Función para detener el arrastre de una carta
function detenerArrastreCarta() {
    if (!isDraggingCard) return;
    
    // Eliminar la clase de arrastre
    currentCard.classList.remove("dragging");
    
    // Restaurar la posición original de la carta
    currentCard.style.transform = "";
    
    isDraggingCard = false;
    currentCard = null;
}




// Otras variables globales para el juego (puedes ajustarlas según tus necesidades)
let jugadorPrincipal = {
    salud: 30,
    cordura: 15,
    cartas: [],
};

let jugadoresOponentes = [
    { nombre: "Jugador 1", salud: 30, cordura: 15, cartas: [] },
    { nombre: "Jugador 2", salud: 30, cordura: 15, cartas: [] },
    // Agrega más jugadores oponentes si es necesario
];

// Función para iniciar una partida de prueba
function iniciarPartidaDePrueba() {
    // Generar cartas aleatorias para el jugador principal y los oponentes
    jugadorPrincipal.cartas = generarCartasAleatorias(5); // Genera 5 cartas para el jugador principal
    for (const oponente of jugadoresOponentes) {
        oponente.cartas = generarCartasAleatorias(5); // Genera 5 cartas para cada oponente
    }

    // Actualizar la interfaz de usuario
    actualizarInterfaz();
}

// Función para generar cartas aleatorias (simulación)
function generarCartasAleatorias(cantidad) {
    const cartas = [];
    for (let i = 0; i < cantidad; i++) {
        // Simulación: crea una carta con nombre y daño aleatorio
        const carta = {
            nombre: `Carta ${i + 1}`,
            dano: Math.floor(Math.random() * 10) + 1, // Daño aleatorio entre 1 y 10
        };
        cartas.push(carta);
    }
    return cartas;
}

// Función para actualizar la interfaz de usuario con la información del juego
function actualizarInterfaz() {
    // Actualiza la salud y la cordura de los jugadores
    actualizarSaludYcordura();

    // Muestra las cartas del jugador principal y de los oponentes en la interfaz
    mostrarCartas(jugadorPrincipal, "player-hand");
    for (const oponente of jugadoresOponentes) {
        mostrarCartas(oponente, "opponent-hand");
    }
}

// Función para mostrar las cartas de un jugador en la interfaz
function mostrarCartas(jugador, contenedorId) {
    const contenedor = document.querySelector(`.${contenedorId}`);
    contenedor.innerHTML = ""; // Limpia el contenedor antes de agregar las cartas

    for (const carta of jugador.cartas) {
        const cartaElement = document.createElement("div");
        cartaElement.className = "carta";
        cartaElement.innerHTML = `
            <h3>${carta.nombre}</h3>
            <p>Daño: ${carta.dano}</p>
        `;

        contenedor.appendChild(cartaElement);
    }
}

// Función para actualizar la salud y cordura en la interfaz
function actualizarSaludYcordura() {
    document.getElementById("saludPrincipal").textContent = `Salud: ${jugadorPrincipal.salud}`;
    document.getElementById("corduraPrincipal").textContent = `Cordura: ${jugadorPrincipal.cordura}`;

    for (let i = 0; i < jugadoresOponentes.length; i++) {
        document.getElementById(`saludOponente${i}`).textContent = `Salud: ${jugadoresOponentes[i].salud}`;
        document.getElementById(`corduraOponente${i}`).textContent = `Cordura: ${jugadoresOponentes[i].cordura}`;
    }
}

// Evento para escuchar cambios en la casilla de verificación o botón
document.getElementById("sandboxToggle").addEventListener("change", toggleSandbox);

// Llama a actualizarInterfaz al cargar la página para establecer el estado inicial
window.onload = function () {
    iniciarPartidaDePrueba(); // Inicia la partida de prueba al cargar la página
};

// Resto del código JavaScript
// ...
// Variables globales
let turnoActual = 0; // Índice del jugador cuyo turno es actual
let jugadores = [
    { nombre: "Jugador 1", salud: 30, cordura: 15, cartas: [] },
    { nombre: "Jugador 2", salud: 30, cordura: 15, cartas: [] },
    { nombre: "Jugador 3", salud: 30, cordura: 15, cartas: [] },
]; // Agrega más jugadores si es necesario

// Función para iniciar una partida
function iniciarPartida() {
    // Genera cartas iniciales para los jugadores
    for (let i = 0; i < jugadores.length; i++) {
        jugadores[i].cartas = generarCartasAleatorias(5); // Genera 5 cartas para cada jugador
    }

    // Muestra la información inicial en la interfaz
    mostrarInformacionDeJugadores();
    mostrarCartasDeJugadorActual();
}

// Función para generar cartas aleatorias (simulación)
function generarCartasAleatorias(cantidad) {
    const cartas = [];
    for (let i = 0; i < cantidad; i++) {
        // Simulación: crea una carta con nombre y daño aleatorio
        const carta = {
            nombre: `Carta ${i + 1}`,
            dano: Math.floor(Math.random() * 10) + 1, // Daño aleatorio entre 1 y 10
        };
        cartas.push(carta);
    }
    return cartas;
}

// Función para mostrar la información de los jugadores en la interfaz
function mostrarInformacionDeJugadores() {
    for (let i = 0; i < jugadores.length; i++) {
        const jugador = jugadores[i];
        document.getElementById(`nombreJugador${i}`).textContent = jugador.nombre;
        document.getElementById(`saludJugador${i}`).textContent = `Salud: ${jugador.salud}`;
        document.getElementById(`corduraJugador${i}`).textContent = `Cordura: ${jugador.cordura}`;
    }
}

// Función para mostrar las cartas del jugador cuyo turno es actual
function mostrarCartasDeJugadorActual() {
    const jugadorActual = jugadores[turnoActual];
    const contenedorCartas = document.getElementById("cartasJugadorActual");
    contenedorCartas.innerHTML = ""; // Limpia el contenedor antes de agregar las cartas

    for (const carta of jugadorActual.cartas) {
        const cartaElement = document.createElement("div");
        cartaElement.className = "carta";
        cartaElement.textContent = `${carta.nombre} (Daño: ${carta.dano})`;

        // Agrega un evento para jugar la carta cuando se hace clic en ella
        cartaElement.addEventListener("click", () => jugarCarta(carta));

        contenedorCartas.appendChild(cartaElement);
    }
}

// Función para jugar una carta
function jugarCarta(carta) {
    const jugadorActual = jugadores[turnoActual];
    // Realiza las acciones necesarias para el juego, como restar salud al oponente, etc.
    // Actualiza el estado del juego según la carta jugada

    // Simplemente como ejemplo, aquí vamos a eliminar la carta del jugador después de jugarla:
    const index = jugadorActual.cartas.indexOf(carta);
    if (index !== -1) {
        jugadorActual.cartas.splice(index, 1);
    }

    // Actualiza la interfaz
    mostrarCartasDeJugadorActual();

    // Cambia al siguiente turno
    siguienteTurno();
}

// Función para cambiar al siguiente turno
function siguienteTurno() {
    turnoActual = (turnoActual + 1) % jugadores.length; // Avanza al siguiente jugador en círculo
    mostrarCartasDeJugadorActual();
}

// Evento para iniciar la partida al cargar la página
window.onload = function () {
    iniciarPartida(); // Inicia la partida al cargar la página
};

// ...

// Función para atacar a un jugador oponente
function atacarOponente(carta, jugadorObjetivo) {
    const jugadorActual = jugadores[turnoActual];

    // Realiza las acciones de ataque aquí, como reducir la salud del jugador objetivo
    jugadorObjetivo.salud -= carta.dano;

    // Actualiza la interfaz para reflejar los cambios en la salud del jugador objetivo
    document.getElementById(`saludJugador${jugadores.indexOf(jugadorObjetivo)}`).textContent = `Salud: ${jugadorObjetivo.salud}`;

    // Simplemente como ejemplo, aquí vamos a eliminar la carta del jugador después de jugarla:
    const index = jugadorActual.cartas.indexOf(carta);
    if (index !== -1) {
        jugadorActual.cartas.splice(index, 1);
    }

    // Actualiza la interfaz
    mostrarCartasDeJugadorActual();

    // Cambia al siguiente turno
    siguienteTurno();
}

// Función para controlar el flujo del juego
function controlarFlujoDelJuego() {
    // Verifica las condiciones de victoria o derrota aquí
    // Por ejemplo, si un jugador llega a 0 de salud, termina el juego y muestra un mensaje de resultado
    const jugadorActual = jugadores[turnoActual];
    if (jugadorActual.salud <= 0) {
        // El jugador actual ha perdido
        mostrarMensajeDelSistema(`¡${jugadorActual.nombre} ha perdido!`);
        // Aquí puedes realizar otras acciones, como reiniciar el juego o mostrar una pantalla de finalización
    } else {
        // Continuar el juego, por ejemplo, verificar si todos los oponentes han sido derrotados para declarar la victoria
        if (todosOponentesDerrotados()) {
            // El jugador actual ha ganado
            mostrarMensajeDelSistema(`¡${jugadorActual.nombre} ha ganado!`);
            // Aquí puedes realizar otras acciones, como reiniciar el juego o mostrar una pantalla de finalización
        }
    }
}

// Función para verificar si todos los oponentes han sido derrotados
function todosOponentesDerrotados() {
    for (const jugador of jugadores) {
        // Ignora al jugador actual
        if (jugadores.indexOf(jugador) !== turnoActual) {
            if (jugador.salud > 0) {
                // Si al menos un oponente tiene salud mayor que 0, el juego continúa
                return false;
            }
        }
    }
    return true; // Todos los oponentes han sido derrotados
}

// ...

// Modificar la función jugarCarta para atacar a un oponente
function jugarCarta(carta) {
    const jugadorActual = jugadores[turnoActual];
    
    // Verificar si se ha seleccionado un oponente para atacar (puedes implementar esta parte en la interfaz)
    const jugadorObjetivo = seleccionarOponente(); // Implementa esta función para seleccionar un oponente

    if (jugadorObjetivo) {
        atacarOponente(carta, jugadorObjetivo);
    } else {
        // Mostrar un mensaje de error si no se selecciona un oponente
        mostrarMensajeDelSistema("Selecciona un jugador objetivo para atacar.");
    }
    
    // Luego de atacar, controlar el flujo del juego
    controlarFlujoDelJuego();
}

// ...

function usarObjeto(jugador, objeto) {
    // Aplicar el efecto del objeto (personaliza según tu lógica)
    // Por ejemplo, aumentar la salud del jugador en función del objeto

    const efecto = objeto.efecto; // Supongamos que el objeto tiene un atributo "efecto"
    if (efecto === "salud") {
        jugador.salud += objeto.valor;
        mostrarMensajeDelSistema(`${jugador.nombre} ha usado ${objeto.nombre} y ha ganado ${objeto.valor} puntos de salud.`);
    } else if (efecto === "cordura") {
        jugador.cordura += objeto.valor;
        mostrarMensajeDelSistema(`${jugador.nombre} ha usado ${objeto.nombre} y ha ganado ${objeto.valor} puntos de cordura.`);
    }

    // Eliminar el objeto de la lista de objetos del jugador
    const index = jugador.objetos.indexOf(objeto);
    if (index !== -1) {
        jugador.objetos.splice(index, 1);
    }

    // Actualizar la interfaz para reflejar los cambios
    mostrarSaludCordura(jugador);
    mostrarObjetos(jugador);

    // Cambiar al siguiente turno
    siguienteTurno();
}


    // Actualizar la interfaz según los cambios en la salud, cordura, etc.
    actualizarInterfazJugadorActual();

    // Cambiar al siguiente turno
    siguienteTurno();

function siguienteTurno() {
        // Cambiar al siguiente jugador en turno
    turnoActual = (turnoActual + 1) % jugadores.length;
    
        // Mostrar un mensaje indicando el nuevo turno
    mostrarMensajeDelSistema(`Turno de ${jugadores[turnoActual].nombre}`);
    
        // Aquí puedes agregar lógica adicional relacionada con el cambio de turno, como robar una carta al comienzo del turno, etc.
}


// Supongamos que ya tienes jugadores creados y cartas repartidas, como se mostró anteriormente.

// Iniciar el primer turno

// Mostrar el turno inicial en la interfaz
mostrarMensajeDelSistema(`Turno de ${jugadores[turnoActual].nombre}`);

// Simulamos algunos movimientos iniciales
setTimeout(() => {
    jugarCarta(jugadores[turnoActual].cartas[0]); // El jugador actual juega una carta
}, 2000);

// Continuar con los turnos alternos
// Simular más movimientos y acciones de los jugadores según tus reglas y lógica del juego


    // Aquí puedes realizar otras acciones relacionadas con el cambio de turno, como ajustar recursos, mostrar mensajes, etc.

    // Implementa la lógica de la IA o espera la acción del siguiente jugador si es un juego en línea


function simularJuego() {
    // Crear jugadores (esto debería hacerse antes de iniciar el juego)
    const jugador1 = crearJugador("Jugador 1");
    const jugador2 = crearJugador("Jugador 2");

    // Repartir cartas iniciales a los jugadores (esto también debe hacerse antes del juego)
    repartirCartasIniciales(jugador1, jugador2);

    // Agregar jugadores a la lista de jugadores
    jugadores.push(jugador1, jugador2);

    // Mostrar mensaje de inicio del juego
    mostrarMensajeDelSistema("¡Comienza la partida!");

    // Iniciar el primer turno
    turnoActual = 0; // Comenzar con el primer jugador

    // Mostrar el turno inicial en la interfaz
    mostrarMensajeDelSistema(`Turno de ${jugadores[turnoActual].nombre}`);

    // Implementar la lógica del juego real aquí, como permitir que los jugadores tomen decisiones y jueguen cartas.

    // Aquí puedes usar las funciones de robarCarta, jugarCarta, usarObjeto, etc., según las acciones de los jugadores.

    // Simulamos algunos movimientos iniciales
    robarCarta(); // Jugador 1 roba una carta al comienzo
    robarCarta(); // Jugador 2 roba una carta al comienzo

    // Simulamos algunos turnos alternos
    setTimeout(() => {
        jugarCarta(jugador1.cartas[0]); // Jugador 1 juega una carta
    }, 2000);

    setTimeout(() => {
        jugarCarta(jugador2.cartas[0]); // Jugador 2 juega una carta
    }, 4000);

    // Continúa con la lógica del juego aquí, permitiendo que los jugadores tomen decisiones y jueguen cartas.
}

// Llama a la función para simular el juego (esto podría estar vinculado a un botón en tu interfaz)
simularJuego();

// Función para abrir la ventana de selección de objetos
function abrirSeleccionDeObjetos() {
    // Aquí puedes mostrar una ventana emergente o crear una lista desplegable
    // con la lista de objetos disponibles para seleccionar.
    // Puedes usar JavaScript o bibliotecas de UI como jQuery o Bootstrap para crear la interfaz de selección de objetos.
    
    // Por ejemplo, puedes usar window.prompt para una ventana emergente simple:
    const objetoSeleccionado = window.prompt("Selecciona un objeto:", "Objeto 1");

    // Aquí puedes realizar acciones basadas en el objeto seleccionado, como usarlo en el juego.
    if (objetoSeleccionado) {
        console.log(`Has seleccionado: ${objetoSeleccionado}`);
        // Realiza acciones con el objeto seleccionado, por ejemplo, usarlo en el juego.
    }
}

// Asocia la función al botón de selección de objetos
document.getElementById("seleccionarObjeto").addEventListener("click", abrirSeleccionDeObjetos);
