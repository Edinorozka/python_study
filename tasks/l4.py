def l4(sym, a, b):
    import math
    import random
    match sym:
        case "+":
            s = a + b
        case "-":
            s = a - b
        case "/":
            s = a / b
        case "*":
            s = a * b
        case "^":
            s = a ** b
        case "abs":
            s = abs(a)
        case "ran":
            s = random.randint(a, b)
        case "f":
            s = math.factorial(a)
        case "acos":
            b = False
            while not b:
                if -1 <= a and a <= 1:
                    b = True
                else:
                    print("введите число в интервале от -1 до 1")
                    a = float(input())
            s = math.acos(a)
    return s


while True:
    print("Операции: +, -, /, *, степень - ^, модуль - abs, случайное число - ran,"
          "факториал - f, арккосинус - acos, выход - exit")
    sym = str(input())
    if sym == 'exit':
        break
    print("Введите 2 числа")
    a = float(input())
    b = float(input())
    print(l4(sym, a, b))