with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
for i, line in enumerate(lines):
    if 'id="float-world"' in line:
        start_idx = i
        break

if start_idx != -1:
    open_divs = 0
    end_idx = -1
    for i in range(start_idx, len(lines)):
        open_divs += lines[i].count('<div')
        open_divs -= lines[i].count('</div')
        if open_divs == 0:
            end_idx = i
            break
    print(f"Start: {start_idx + 1}, End: {end_idx + 1}")
    
    # print lines after end to see what it connects to
    for j in range(end_idx + 1, min(end_idx + 10, len(lines))):
        print(lines[j].strip())
