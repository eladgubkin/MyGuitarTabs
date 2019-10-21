from backend.app import app
from flask import request, jsonify
from backend.scraper import get_urls, get_tabs


# Get song urls by search string
@app.route('/api/songs/urls', methods=['GET'])
def get_songs_urls():
    search_string = request.args.get('search_string')
    try:
        urls = get_urls(search_string)
        return jsonify(urls)
    except Exception as e:
        print(e)
        return jsonify([]), 400


# Get tabs for song by url
@app.route('/api/songs/tabs', methods=['GET'])
def get_songs_tabs():
    url = request.args.get('url')
    try:
        tabs = get_tabs(url)
        return jsonify(tabs)
    except Exception as e:
        print(e)
        return jsonify([]), 400
