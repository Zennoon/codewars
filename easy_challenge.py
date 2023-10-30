def turn_to_nano(num):
    nano = 0
    while (num > 0):
        for i in range(9, 0, -1):
            if (num - i >= 0):
                nano = (nano * 10) + i
                num -= i
                break
    return (nano)

def get_num_ones(num, ac):
    if (num == 0):
        return (ac)
    ac = (ac * 10) + 1
    return (get_num_ones(num - 1, ac))

def one_two_three(n):
    return [turn_to_nano(n), get_num_ones(n, 0)]


print(one_two_three(3))