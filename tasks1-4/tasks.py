from l1 import l1
from l2 import l2
from l3 import l3
from l4 import l4

while True:
    print("для запуска заданий введите l + номер задание от 1 до 4, чтоб выйти введите что-то другое")
    sym = str(input())
    match sym:
        case "l1":
            l1()
        case "l2":
            l2()
        case "l3":
            l3()
        case "l4":
            l4()
        case _:
            break