import random
from typing import cast
# -*- coding: UTF-8 -*-


def Pacanea(Suma_introdusa):
    odds_list = {"A":0.1 ,"B":0.1 ,"C":0.2 , "D":0.3 , "E":0.2, "S":10,"F":0.1} # pentru suma
    place_holder = ["A","B","C","D","E","S","F","A","B","C","D","E","A","B","C","D","E","A","B","C","D","E"]# multe iteratii pentru acelasi emoji pentru rata mai mica la joker(sunt lazy rau stiu)
    mula = 0.0

    
    for i in range(5):
        castig = [random.choice(place_holder),random.choice(place_holder),random.choice(place_holder),random.choice(place_holder),random.choice(place_holder)]

        print(castig)

        j = 0

        if castig[j] == castig[j+1]:
            mula += float(odds_list[castig[j]]) * 2
            if castig[j] == castig[j+2]:
                mula += float(odds_list[castig[j]])
                if castig[j] == castig[j+3]:
                    mula+= float(odds_list[castig[j]])
                    if castig[j] == castig[j+4]:
                        mula += float(odds_list[castig[j]])

        
    print("Suma castigata este :", mula * Suma_introdusa)

            
    return 0
    
x = float(input())

Pacanea(x)


#muie aristotel imi place ponta 
