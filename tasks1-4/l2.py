def l2():
    print("введите строку")
    line = str(input())

    print(line[:2] + line[3:])

    i = 1
    for mas in line:
        if mas == 'c':
            print("в строке есть символ с у него номер " + str(i))
        i = i + 1

    print("Длинна введённой строки = " + str(len(line)))

    print(line[:-1])