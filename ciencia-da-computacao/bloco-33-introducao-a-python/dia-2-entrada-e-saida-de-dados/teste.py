with open("arquivo.txt", "r") as file_to_read, open(
    "reprovados.txt", "w"
) as file_to_write:
    list = file_to_read.read().split()
    for index, n in enumerate(list):
        if n.isdigit() and int(n) < 6:
            file_to_write.write(f'{list[index - 1]}\n')
