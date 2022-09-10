import random


with open('words.txt') as file:
    words = file.read().splitlines()


randomWord = random.choice(words)
scrambled_word = "".join(random.sample(randomWord, len(randomWord)))
enumarated = list(enumerate(words))
setString = ''
for index, word in enumarated:
    setString += f'{index} - {word}\n'

print(f'Palavra embaralhada: {scrambled_word}')
correct_guess = False
for n in range(3):
    choice = int(input(f'Adivinhe a palavra: \n{setString}'))
    if enumarated[choice][1] == randomWord:
        print('Acertou!')
        correct_guess = True
        break
    else:
        print('Tente novamente')

print('Game over :c') if correct_guess is False else None
