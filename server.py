from flask import Flask, render_template
import random

app = Flask(__name__)

# Datos iniciales del juego (puedes expandir esto)
mazo = ["Carta1", "Carta2", "Carta3"]
jugadores = [{"nombre": "Jugador1", "mano": [], "salud": 30, "cordura": 15},
             {"nombre": "Jugador2", "mano": [], "salud": 30, "cordura": 15}]
turno_actual = 0  # Índice del jugador cuyo turno es actual
modo_sandbox = False  # Variable para indicar si el juego está en modo sandbox

# Función para barajar el mazo al inicio del juego
def barajar_mazo():
    random.shuffle(mazo)

# Función para repartir cartas iniciales a los jugadores
def repartir_cartas_iniciales():
    for jugador in jugadores:
        for _ in range(5):  # Reparte 5 cartas iniciales a cada jugador
            carta = mazo.pop()
            jugador['mano'].append(carta)

# Función para cambiar al siguiente jugador en el turno
def cambiar_turno():
    global turno_actual
    turno_actual = (turno_actual + 1) % len(jugadores)

# Función para verificar el fin del juego
def verificar_fin_del_juego():
    # Implementa la lógica para verificar el fin del juego
    # Puedes hacer esto después de cada acción principal o en un momento específico

    if len(jugadores) == 1:
        # Un solo jugador queda en pie, ese jugador gana la partida
        return f"¡{jugadores[0]['nombre']} es el Ash original y gana la partida!"
    # Implementa la lógica para verificar si todas las cartas han sido jugadas
    elif todas_las_cartas_han_sido_jugadas():
        # Todas las cartas han sido jugadas, el juego termina sin ganador
        return "El juego termina sin un Ash original definitivo."

# Función para que un jugador juegue una carta de su mano
def jugar_carta(jugador, carta):
    if carta in jugador['mano']:
        # Implementa la lógica para jugar la carta
        jugador['mano'].remove(carta)
        verificar_fin = verificar_fin_del_juego()  # Comprueba si el juego ha terminado
        if verificar_fin:
            return f"Acción realizada correctamente. {verificar_fin}"
        return "Acción realizada correctamente"
    else:
        return "Error: No tienes esa carta en tu mano."

# Rutas de la aplicación
@app.route('/')
def inicio():
    return render_template('inicio.html')

@app.route('/juego')
def juego():
    # Implementa la lógica del juego aquí
    return render_template('juego.html', jugadores=jugadores, modo_sandbox=modo_sandbox)

@app.route('/realizar-accion/<jugador>/<accion>/<carta>')
def realizar_accion(jugador, accion, carta):
    if modo_sandbox:
        # Lógica específica para el modo sandbox
        # Esto puede incluir acciones que no afecten al juego principal
        resultado = "Acción en modo sandbox realizada."
    else:
        if accion == "jugar_carta":
            jugador_actual = jugadores[turno_actual]
            if jugador_actual['nombre'] == jugador:
                resultado = jugar_carta(jugador_actual, carta)
                cambiar_turno()
            else:
                return "Error: No es el turno de este jugador."
        else:
            return "Error: Acción no válida."

    return resultado

if __name__ == '__main__':
    app.run(debug=True)
