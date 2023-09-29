from _game.players_creation.player_config import Player


# gets the name of the players and creates a player

players_names = ['Juan ','Jacinta', 'Josefina','Juanra']


def create_players(players_names):

    player= []

    for name in players_names:
        if len(player) == 0:
            player1 = Player(name)
            player.append(player1)
        elif player1 in player:
            player2 = Player(name)
            player.append(player2)
        elif player2 in player:
            player3 = Player(name)
            player.append(player3)
        else:
            player4 = Player(name)
            player.append(player4)

    return player


    
    
