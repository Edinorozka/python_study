import requests
from bs4 import BeautifulSoup

def Laptop(url):
    laptop = {'name': '', 'prise': '', 'description': ''}
    res = requests.get(url)
    soup = BeautifulSoup(res.text, 'html.parser')

    title = soup.find('h4', {"class": ""}).text
    laptop['name'] = title
    prise = soup.find('h4', {"class": "pull-right price"}).text
    laptop['prise'] = prise
    description = soup.find('p', {"class": "description"}).text
    laptop['description'] = description
    return laptop
