import math

total_part_1 = 0
total_part_2 = 0

filename = 'input.txt'
with open(filename,) as file_object:
    for line in file_object:
        # Part 1
        x_part_1 = int(line,10)
        res_part_1 = x_part_1 / 3
        total_part_1 += math.floor(res_part_1) - 2

        # Part 2
        x_part_2 = int(line,10)
        while math.floor(x_part_2 / 3) > 2:
            res_part_2 = x_part_2 / 3
            x_part_2 = math.floor(res_part_2) - 2
            total_part_2 += x_part_2

print("Part 1: " + str(total_part_1))
print("Part 2: " + str(total_part_2))