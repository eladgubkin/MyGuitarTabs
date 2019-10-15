from bs4 import BeautifulSoup
import requests
import random
import json
from functools import reduce
from urllib.parse import quote

USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36'


def deep_get(dictionary, keys, default=None):
    # get value of nested dictionary
    return reduce(lambda d, key: d.get(key, default) if isinstance(
        d, dict) else default, keys.split("."), dictionary)


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


def get_tabs(url):
    headers = {'User-Agent': USER_AGENT}
    source = requests.get(url, headers=headers).text

    soup = {}
    soup = json.loads(BeautifulSoup(source, 'lxml')
                      .find_all('script')[10].text
                      .replace(r'window.UGAPP.store.page = ', '')
                      .replace(r';', '')
                      .replace(r'window.UGAPP.store.i18n = {}', ''))

    data = {
        'type': deep_get(soup, 'data.tab.type'),
        'song_name': deep_get(soup, 'data.tab.song_name'),
        'artist': deep_get(soup, 'data.tab.artist_name'),
        'rating': deep_get(soup, 'data.tab.rating'),
        'author': deep_get(soup, 'data.tab.username'),
        'author_id': deep_get(soup, 'data.tab.user_id'),
        'key': deep_get(soup, 'data.tab_view.meta.tonality'),
        'tuning_name': deep_get(soup, 'data.tab_view.meta.tuning.name'),
        'tuning_value': deep_get(soup, 'data.tab_view.meta.tuning.value'),
        'difficulty': deep_get(soup, 'data.tab_view.meta.difficulty'),
        'last_edit_by': deep_get(soup, 'data.tab_view.wiki_tab.username'),
        'last_edit_by_id': deep_get(soup, 'data.tab_view.wiki_tab.user_id'),
        'content': deep_get(soup, 'data.tab_view.wiki_tab.content'),
        'strummings': deep_get(soup, 'data.tab_view.wiki_tab.strummings'),
        'contributors': deep_get(soup, 'data.tab_view.contributors'),
        'recommended_tabs': deep_get(soup, 'data.recommended_tabs'),
    }

    return data
