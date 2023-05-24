def l1(a, b):
    if a < b:
        s ="Число " + str(a) + " больше " + str(b)
    elif a > b:
        if a >= b * 3:
            s = "Число " + str(a) + " более чем в три раза больше чем " + str(b)
        else:
            s = "Число " + str(b) + " больше " + str(a)

print("введите два числа")
a = int(input())
b = int(input())
print(l1(a, b))