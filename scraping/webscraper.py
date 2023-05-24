import requests
import csv
from bs4 import BeautifulSoup

from scraping.scrapLaptop import Laptop

url = 'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops'
res = requests.get(url)
soup = BeautifulSoup(res.text, 'html.parser')

laptops = []
for laptop in soup.find_all('a', {"class": "title"}):
    l = 'https://webscraper.io'+str(laptop.get('href'))
    if l is not None:
        laptops.append(Laptop(l))
for laptop in laptops:
    print(laptop)

with open('./laptops.csv', "a", newline="") as csvfile:
    write = csv.DictWriter(csvfile, fieldnames=laptops[0].keys())
    write.writeheader()
    for laptop in laptops:
        write.writerow(laptop)