def l4():
    import math
    import random

    print("Операции: +, -, /, *, степень - ^, модуль - abs, случайное число - ran,"
          "факториал - f, арккосинус - acos")
    sym = str(input())

    while True:
        match sym:
            case "+":
                print("Введите 2 числа")
                a = float(input())
                b = float(input())
                print(str(a) + " + " + str(b) + " = " + str(a + b))
            case "-":
                print("Введите 2 числа")
                a = float(input())
                b = float(input())
                print(str(a) + " - " + str(b) + " = " + str(a - b))
            case "/":
                print("Введите 2 числа")
                a = float(input())
                b = float(input())
                print(str(a) + " / " + str(b) + " = " + str(a / b))
            case "*":
                print("Введите 2 числа")
                a = float(input())
                b = float(input())
                print(str(a) + " * " + str(b) + " = " + str(a * b))
            case "^":
                print("Введите 2 числа")
                a = float(input())
                b = float(input())
                print(str(a) + " ^ " + str(b) + " = " + str(a ** b))
            case "abs":
                print("Введите число")
                a = float(input())
                print("abs( " + str(a) + " ) " + " = " + str(abs(a)))
            case "ran":
                print("введите интервал")
                a = float(input())
                b = float(input())
                print("Случайное число = " + str(random.randint(a, b)))
            case "f":
                print("введите число")
                a = int(input())
                print("Факториал числа = " + str(math.factorial(a)))
            case "acos":
                b = False
                while not b:
                    print("введите число в интервале от -1 до 1")
                    a = float(input())
                    if -1 <= a and a <= 1:
                        b = True
                print("Арккосинус числа = " + str(math.acos(a)))
            case _:
                break
        print("Операции: +, -, /, *, степень - ^, модуль - abs, случайное число - ran,"
              "факториал - f, арккосинус - acos")

        sym = str(input())


