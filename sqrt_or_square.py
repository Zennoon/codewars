import math

def square_or_square_root(arr):
    new_arr = []

    for num in arr:
        if (math.sqrt(num) % 1 == 0):
            new_arr.append(int(math.sqrt(num)))
        else:
            new_arr.append(num ** 2)
    return (new_arr)

arr = [100, 101, 5, 5, 1, 1]
print(square_or_square_root(arr))