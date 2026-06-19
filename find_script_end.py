with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i in range(796, len(lines)):
    if '</script>' in lines[i]:
        print(f"Ends at {i+1}")
        break
