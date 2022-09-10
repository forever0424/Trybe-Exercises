import json
import random


with open("pokemons.json") as file:
    pokemons = [
        pokemon
        for pokemon in json.load(file)["results"]
        if int(pokemon["national_number"]) <= 251
    ]
    random_pokemon = random.choice(pokemons)["name"]
    difficulty = input('''Escolha a dificuldade:
    0 - Fácil
    1 - Médio
    2 - Difícil
''')
    if difficulty == '0':
        number_of_tries = round(len(random_pokemon) * 0.7)
    elif difficulty == '1':
        number_of_tries = round(len(random_pokemon) * 0.5)
    elif difficulty == '2':
        number_of_tries = round(len(random_pokemon) * 0.3)
    else:
        number_of_tries = round(len(random_pokemon) * 0.5)


hint = random_pokemon[0]
correct_guess = False
for n in range(number_of_tries):
    print(f"Número de tentativas: {number_of_tries - n}")
    print(f"Dica: {hint}")
    guess = input("Quem é esse Pokemon? ")
    if guess.upper() == random_pokemon.upper():
        print("Acertou!")
        correct_guess = True
        break
    else:
        hint += random_pokemon[n + 1]


if not correct_guess:
    print(f"O Pokemon era {random_pokemon}. Tente novamente!")
