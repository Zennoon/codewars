def split_integer(num, parts):
    split_arr = []
    temp = parts
    if (parts > num):
        temp = num
    while (parts):
        if (temp):
            quot = num // temp
            split_arr.append(quot)
            num -= quot
            temp -= 1
        else:
            split_arr.append(0)
        parts -= 1
    return split_arr