def l3():
    print("введите текст")
    text = str(input())
    index = 0; summ = 0; i1 = 0; i2 = 0; i = 0

    for _ in text:
        index1 = text.find(' ', index)
        if summ < index1 - index:
            summ = index1 - index
            i1 = index; i2 = index1
            index = index1 + 1

    index1 = len(text)
    if summ < index1 - text.rfind(' ') + 1:
        i1 = text.rfind(' ') + 1;
        i2 = index1

    print("Самое длинное слово - " + text[i1:i2])

    index = 0; summ1 = 0
    for _ in text:
        index1 = text.find(' ', index)
        summ = text.count(text[index : index1])
        if summ > summ1:
            summ1 = summ
            i1 = index
            i2 = index1
        index = index1 + 1
    print("Чаще всего, " + str(summ1) +" раз, встретилось - " + text[i1:i2])
