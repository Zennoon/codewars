def pattern(n):
    ret = ""
    for i in range(1, n + 1):
        ret += str(1)
        ret += '*' * (i - 1)
        if i > 1:
            ret += str(i)
        if i < n:
            ret += '\n'
    return (ret)

print(pattern(10))