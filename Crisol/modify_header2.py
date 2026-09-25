import sys

path = r'C:\Proyectos\Primigenias 33\Crisol\src\components\Header.astro'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add to mobile menu
if '<div class="mobile-menu">' in content and 'mobile-nav-links' in content:
    if '<LanguagePicker />' not in content.split('<div class="mobile-menu">')[1]:
        content = content.replace('<nav class="mobile-nav-links">', '<nav class="mobile-nav-links">\n      <div style="display: flex; justify-content: center; margin-bottom: 1rem;">\n        <LanguagePicker />\n      </div>')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Header modified for mobile")
