with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Find the start of the script block
start_idx = -1
for i, line in enumerate(lines):
    if 'FLOATING HOMEPAGE — Cinematic Slideshow' in line:
        start_idx = i - 1 # Include the comment block start
        break

if start_idx != -1:
    end_idx = -1
    for i in range(start_idx, len(lines)):
        if '</script>' in lines[i]:
            end_idx = i
            break
    
    if end_idx != -1:
        new_lines = lines[:start_idx] + lines[end_idx+1:]
        with open('index.html', 'w', encoding='utf-8') as f:
            f.writelines(new_lines)
        print("Deleted script block from HTML")
