with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

open_count = 0
close_count = 0
for i, line in enumerate(lines):
    open_count += line.count('<section')
    close_count += line.count('</section>')
    if close_count > open_count:
        print(f"Extra closing section at line {i+1}")
        break
