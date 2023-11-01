def arrange(strng):
    arr = strng.split(" ")
    for ind in range(len(arr)):
        if (ind < len(arr) - 1):
            if (ind % 2):
                if (len(arr[ind]) < len(arr[ind + 1])):
                    temp = arr[ind]
                    arr[ind] = arr[ind + 1]
                    arr[ind + 1] = temp
            else:
                if (len(arr[ind]) > len(arr[ind + 1])):
                    temp = arr[ind]
                    arr[ind] = arr[ind + 1]
                    arr[ind + 1] = temp

    for ind in range(0, len(arr), 2):
        arr[ind] = arr[ind].lower()
    for ind in range(1, len(arr), 2):
        arr[ind] = arr[ind].upper()
    return " ".join(arr)

strng = "be arrived after two My so"
print(arrange(strng))