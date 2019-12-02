import math

total = 0

filename = 'input.txt'
with open(filename,) as file_object:
    for line in file_object:
        x = int(line,10)
        res = x / 3
        total += math.floor(res) - 2

print(total)