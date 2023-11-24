import random
import json

# Načtení dat ze souboru
with open('Categories.json', 'r', encoding='utf-8') as file:
    jsonData = json.load(file)

# Vytváříme kopii dat, abychom neměnili původní slovník
data = jsonData.copy()

# Aktualizujeme hodnoty ve smyčce
for item in data["ProductList"]:
    item["TL"] = random.randint(10, 25)

# Převod aktualizovaných dat na JSON řetězec
updatedJsonData = json.dumps(data, indent=2)

# Tiskneme aktualizovaný JSON řetězec
print(updatedJsonData)

# Zápis aktualizovaných dat zpět do souboru
with open('Categories.json', 'w', encoding='utf-8') as file:
    json.dump(data, file, indent=2)
