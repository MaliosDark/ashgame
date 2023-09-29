import json
import random

# ### Comprbar Tipos ###
# ######################


# with open('_game/deck/cartas.json', 'r') as all_cards:
#     selection = json.load(all_cards)
#     totals = {
#         'hechizos' : 0,
#         'armas': 0,
#         'objeto' : 0,
#         'monstruo' : 0,
#         'trampas' : 0,
#         'contrahechizos' : 0
#     }


#     for carta in selection['cartas']:

#         if carta['Tipo'] == 'hechizo'.title():
#             totals['hechizos'] +=1
#         elif carta['Tipo'] == 'arma'.title():
#             totals['armas'] +=1
#         elif carta['Tipo'] == 'objeto'.title():
#             totals['objeto'] +=1
#         elif carta['Tipo'] == 'monstruo'.title():
#             totals['monstruo'] +=1
#         elif carta['Tipo'] == 'trampa'.title():
#             totals['trampas'] +=1
#         elif carta['Tipo'] == 'contrahechizo'.title():
#             totals['contrahechizos'] +=1



#     print ('\n>>> Total Types <<<\n')
#     for item, value in totals.items():
#         print (item,' = ',value)

#     print ('###############\nTotal cards = ',len(selection['cartas']))
#     # 74 cartas
#     print ('\n>>> -------- <<<\n\n')

#     ### Generar la baraja ###
#     #########################
#     deck = [random.choice(selection['cartas']) for carta in range(50)]
 
# print ('Cartas Seleccionadas:\n##################')
# for item in deck:
#     print (item['Nombre'])

# print ('###############\nTotal cards = ',len(deck))




# ### Comprbar buffs y debuffs ###
# ################################

# with open('_game/deck/cartas.json', 'r') as all_cards:
#     selection = json.load(all_cards)


#     buf_list= []
#     debuf_list= []


#     for carta in selection['cartas']:

#         # print (carta['Efectos'])

#         for efecto in carta['Efectos']:
#             if efecto == 'buff':
#                 for efecto_title in carta['Efectos'][efecto]:
#                     if str(efecto_title) not in buf_list:
#                         buf_list.append(str(efecto_title))
#             elif efecto == 'debuff':
#                 for efecto_title in carta['Efectos'][efecto]:
#                     if str(efecto_title) not in debuf_list:
#                         debuf_list.append(str(efecto_title))

#     print ('\n\n### Buffs ###\n')

#     for item in buf_list:
#         print(item)


#     print ('\n\n### Debuffs ###\n')

#     for item in debuf_list:
#         print(item)

#     print('\n###############\n')




#> Weapons effects <#
with open('_game/deck/wp_effects.json', 'r') as all_effects:
    selection = json.load(all_effects)

    other_list= []

    for fx in selection['efectos_cartas']:

        for item in fx:
            if item == 'Acciones':
                for dicti in fx['Acciones']:
                    if dicti['accion'] not in other_list:
                        other_list.append(dicti['accion'])
        

    print ('\n\n### Weapons Effects ###\n')
    for item in other_list:
        print (item)

#> Spells effects <#
with open('_game/deck/sp_effects.json', 'r') as all_effects:
    selection = json.load(all_effects)

    other_list= []

    for fx in selection['efectos_cartas']:

        for item in fx:
            if item == 'Acciones':
                for dicti in fx['Acciones']:
                    if dicti['accion'] not in other_list:
                        other_list.append(dicti['accion'])
        

    print ('\n\n### Spells effects ###\n')
    for item in other_list:
        print (item)


#> Counter and Traps effects <#
with open('_game/deck/ct_effects.json', 'r') as all_effects:
    selection = json.load(all_effects)

    other_list= []

    for fx in selection['efectos_cartas']:

        for item in fx:
            if item == 'Acciones':
                for dicti in fx['Acciones']:
                    if dicti['accion'] not in other_list:
                        other_list.append(dicti['accion'])
        

    print ('\n\n### Counter and Traps effects ###\n')
    for item in other_list:
        print (item)

    print('\n\n')