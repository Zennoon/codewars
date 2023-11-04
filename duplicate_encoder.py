def duplicate_encode(word):
    word = word.upper()
    count_dict = generate_dict(word)
    output = ""
    for char in word:
        if (count_dict[char] > 1):
            output += ")"
        else:
            output += "("
    return output

def generate_dict(word):
    count_dict = {}
    for char in word:
        count_dict[char] = word.count(char)
    return count_dict

word = "(( @"
print(duplicate_encode(word))