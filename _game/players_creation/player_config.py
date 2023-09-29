class Player:
    def __init__(self, pname):
        self.name = pname
        self.lives = 30
        self.craziness = 0
        self.hand = []
        self.active = True
        self.equipped_weapon = None  # Arma equipada por el jugador
        self.defense = 0  # Puntos de defensa del jugador
        self.max_hand_size = 7  # Tamaño máximo de la mano del jugador
        self.max_health = 30  # Salud máxima del jugador
        self.max_craziness = 15  # Nivel máximo de locura permitido

