import requests
from bs4 import BeautifulSoup

url = 'https://www.tiobe.com/tiobe-index/'
res = requests.get(url)
soup = BeautifulSoup(res.text, 'html.parser')

langs = []
i = 1
for lang in soup.find_all('td', {"class": ""}):
    if i % 6 == 0:
        print(lang.text)
    else:
        print(lang.text  + ' ', end='')
    i += 1
    if i == 120:
        break