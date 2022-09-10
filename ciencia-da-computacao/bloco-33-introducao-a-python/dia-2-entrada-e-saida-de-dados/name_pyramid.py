def namePyramid(name: str):
    while len(name) > 0:
        print(name.upper())
        name = name[:-1]


namePyramid('Rafael')
