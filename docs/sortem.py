with open('README2.md', 'r') as file:
    data = file.read()

split = data.split("---")
split.sort()
split = '---'.join(split)

with open("README2.md", "w") as text_file:
    text_file.write(split)

print(split)