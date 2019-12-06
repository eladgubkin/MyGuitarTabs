from bs4 import BeautifulSoup
import requests
import json
from backend.scraper.settings import USER_AGENT
from backend.utils import deep_get


def get_tabs(url):
    headers = {'User-Agent': USER_AGENT}
    source = requests.get(url, headers=headers).text

    soup = {}
    soup = json.loads(BeautifulSoup(source, 'lxml')
                      .find_all('script')[7].text
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
        'content': deep_get(soup, 'data.tab_view.wiki_tab.content'),
        'strummings': deep_get(soup, 'data.tab_view.wiki_tab.strummings')
    }

    return data
