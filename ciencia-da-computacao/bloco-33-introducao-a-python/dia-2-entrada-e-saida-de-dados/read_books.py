import csv
import json


with open("books.json") as file:
    books = json.load(file)
    books_percentages = {}
    for book in books:
        for category in book["categories"]:
            books_percentages[category] = (
                books_percentages.get(category, 0) + 1
            )

books_percentages = [
    [key, total / len(books)]
    for key, total in books_percentages.items()
]

with open('books_percentages.csv', 'w') as file:
    writer = csv.writer(file)

    headers = ["Categoria", "Porcentagem"]
    writer.writerow(headers)

    writer.writerows(books_percentages)
