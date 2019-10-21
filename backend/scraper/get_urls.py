from bs4 import BeautifulSoup
import requests
import json
from urllib.parse import quote
from backend.scraper.settings import USER_AGENT
from backend.utils import deep_get


def get_urls(search_string):
    url = f'https://www.ultimate-guitar.com/search.php?title={quote(search_string)}&page=1&rating%5B0%5D=4&rating%5B1%5D=5&order=myweight'

    headers = {'User-Agent': USER_AGENT}
    source = requests.get(url, headers=headers).text

    soup = {}
    soup = json.loads(BeautifulSoup(source, 'lxml').find_all('script')[10].text
                      .replace(r'window.UGAPP.store.page = ', '')
                      .replace(r';', '')
                      .replace(r'window.UGAPP.store.i18n = {}', ''))

    data = []
    for url in deep_get(soup, 'data.results'):
        try:
            data.append({
                'tab_url': url['tab_url'],
                'rating': url['rating'],
                'song_name': url['song_name'],
                'artist_name': url['artist_name'],
                'type': url['type'],
            })
        except KeyError:
            continue

    # return sorted data by rating
    # return only Tabs or Chords types, exclude videos, pro
    return sorted([d for d in data if any(t in d['type'] for t in ['Tabs', 'Chords'])], key=lambda song: float(song['rating']))
