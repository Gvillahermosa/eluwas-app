import re
with open('src/components/TopNav.tsx', 'r', encoding='utf-8') as f:
    t = f.read()
# Replace any TopNav parameter list with just empty parens
t = re.sub(r'export function TopNav\s*\([^)]*\)\s*\{', 'export function TopNav() {', t)
with open('src/components/TopNav.tsx', 'w', encoding='utf-8') as f:
    f.write(t)
