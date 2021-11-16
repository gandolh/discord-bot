import random

def barbut(inp):
    if inp.lower() != "bot":
        input("Aici ar fi asteptat pt accept, just press enter: ")

    p1 = "your username" 
    p2 = inp

    p1_roll = random.randrange(1, 7)
    p2_roll = random.randrange(1, 7)

    print(p1, "rolled", p1_roll)
    print(p2, "rolled", p2_roll)

    if p1_roll > p2_roll:
        print(p1, "wins")
    elif p1_roll == p2_roll:
        print("draw")
    else: print(p2, "wins")

def main():
    opponent = input("Pe cine vrei sa iei la trante? ")
    barbut(opponent)

if __name__ == "__main__":
    main()