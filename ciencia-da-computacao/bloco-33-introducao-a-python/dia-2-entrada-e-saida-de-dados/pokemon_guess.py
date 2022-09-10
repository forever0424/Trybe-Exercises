import json
import random


with open("pokemons.json") as file:
    pokemons = [
        pokemon
        for pokemon in json.load(file)["results"]
        if int(pokemon["national_number"]) <= 251
    ]
    random_pokemon = random.choice(pokemons)["name"]
    number_of_tries = round(len(random_pokemon) * 0.6)


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
