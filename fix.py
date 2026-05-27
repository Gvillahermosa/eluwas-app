import os
import glob
import re

# Fix App.tsx
with open('src/App.tsx', 'r') as f:
    app_content = f.read()
app_content = re.sub(r'active={section}\s*onChange={setSection}', '', app_content)
app_content = re.sub(r'onNav={setSection}', '', app_content)
with open('src/App.tsx', 'w') as f:
    f.write(app_content)

def clean_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # remove onNav prop from signature
    content = re.sub(r'\{\s*onNav\s*\}\s*:\s*\{\s*onNav\??\s*:\s*\(\w\s*:\s*Section\)\s*=>\s*void\s*\}|onNav\??\s*:\s*\(\w\s*:\s*Section\)\s*=>\s*void;?', '', content)
    content = re.sub(r'\{\s*onNav\s*\}', '()', content)
    
    # remove Section type
    content = re.sub(r'(?:<Section>|as Section\[\])', '', content)
    content = re.sub(r'as Section', 'as string', content)
    content = re.sub(r'active:\s*Section;', '', content)
    content = re.sub(r'onChange:\s*\(\w\s*:\s*Section\)\s*=>\s*void;', '', content)
    content = re.sub(r'key:\s*Section;', 'key: string;', content)

    # replace onNav calls with navigate
    content = re.sub(r'onNav\((.*?)\)', r'navigate(\1)', content)

    # Add useNavigate if missing but navigate is used (and not already imported in the whole file)
    if 'navigate(' in content and 'useNavigate' not in content:
        content = "import { useNavigate } from 'react-router-dom';\n" + content

    if 'navigate(' in content and 'const navigate =' not in content:
        # insert hook correctly
        content = re.sub(r'(export function \w+\([^)]*\)\s*\{)', r'\1\n  const navigate = useNavigate();\n', content)

    # remove { active, onChange } props from components like TopNav
    content = re.sub(r'\{\s*active,\s*onChange\s*\}\s*:\s*\{[^}]*\}', '()', content)
    content = re.sub(r'\{\s*active,\s*onChange,\s*\}', '()', content)

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)

for f in glob.glob('src/components/*.tsx') + glob.glob('src/pages/*.tsx'):
    clean_file(f)

# Fix images in HomeSection
hs_path = 'src/pages/HomeSection.tsx'
with open(hs_path, 'r') as f:
    hs = f.read()
hs = """import balut from '../assets/foods/balut.jpg';
import KwekKwek1 from '../assets/foods/KwekKwek1.jpg';
import turon from '../assets/foods/turon.jpg';
import pares from '../assets/foods/pares.jpg';
import tempura from '../assets/foods/tempura.jpg';
import kwekKwekImg from '../assets/foods/KwekKwek1.jpg';
import bbq from '../assets/foods/balut.jpg';
""" + hs
with open(hs_path, 'w') as f:
    f.write(hs)

# Fix SeminarsSection image
ss_path = 'src/pages/SeminarsSection.tsx'
with open(ss_path, 'r') as f:
    ss = f.read()
if 'kwekKwekImg' in ss:
    ss = "import kwekKwekImg from '../assets/foods/KwekKwek1.jpg';\n" + ss
    with open(ss_path, 'w') as f:
        f.write(ss)
