def l2(line):

    s1 = line[:2] + line[3:]
    smas = []
    i = 1
    for mas in line:
        if mas == 'c':
            smas.append("в строке есть символ с у него номер " + str(i))
        i = i + 1

    s2 = "Длинна введённой строки = " + str(len(line))

    s3 = line[:-1]

    return s1, smas, s2, s3

print("введите строку")
line = str(input())
print(l2(line))