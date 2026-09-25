import sys

path = r'C:\Proyectos\Primigenias 33\Crisol\src\components\Header.astro'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
if 'import LanguagePicker' not in content:
    content = content.replace('---\n', '---\nimport LanguagePicker from "./LanguagePicker.astro";\nimport { getLangFromUrl, useTranslations } from "../i18n/utils";\nconst lang = getLangFromUrl(Astro.url);\nconst t = useTranslations(lang);\n', 1)

# Add component
if '<LanguagePicker />' not in content:
    content = content.replace('<div class="nav-actions">', '<div class="nav-actions">\n      <LanguagePicker />')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Header modified")
