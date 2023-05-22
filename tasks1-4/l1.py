def l1():
    print("введите два числа")
    a = int(input())
    b = int(input())

    if a < b:
        print("Число " + str(a) + " больше " + str(b))
    elif a > b:
        if a >= b * 3:
            print("Число " + str(a) + " более чем в три раза больше чем " + str(b))
        else:
            print("Число " + str(b) + " больше " + str(a))