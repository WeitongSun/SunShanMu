with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = lines[:169] + lines[262:]

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
print("Deleted float-world from HTML")
