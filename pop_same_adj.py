def pop_blocks(lst):
    lst.append(None)
    i = 0
    while(lst[i] != None):
        if (lst[i] == lst[i + 1]):
            j = i + 1
            while (lst[j] != None):
                if (lst[i] != lst[j]):
                    break
                lst.pop(j)
            lst.pop(i)
            if (i != 0):
                i -= 2
            else:
                i -= 1
        i += 1
    lst.pop(i)
    return (lst)

lst = [1, 5, 2, 3, 4, 4, 3, 5]
print(pop_blocks(lst))
            