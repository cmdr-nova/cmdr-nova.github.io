import requests
import sys
import os
from bs4 import BeautifulSoup
from mastodon import Mastodon

ACCESS_TOKEN = os.getenv('MASTODON_API_KEY')
MASTODON_API_URL = 'https://mastodon.social'  # Replace with your Mastodon instance URL
POSTED_URLS_FILE = 'posted_urls.txt'
MAX_SUMMARY_LENGTH = 200
MAX_POST_LENGTH = 500

def extract_summary_and_tags(post_url):
    response = requests.get(post_url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    # Extract the first <p> tag within the .indent div as a summary
    indent_div = soup.find('div', {'class': 'indent'})
    if indent_div:
        paragraphs = indent_div.find_all('p')
        summary = paragraphs[0].get_text() if paragraphs else "No summary available"
    else:
        summary = "No summary available"
    
    # Truncate the summary to the maximum length
    if len(summary) > MAX_SUMMARY_LENGTH:
        summary = summary[:MAX_SUMMARY_LENGTH].rsplit(' ', 1)[0] + '...'
    
    # Extract the tags from the <span> within the #main div
    main_div = soup.find('div', {'id': 'main'})
    tags = []

    if main_div:
        for span in main_div.find_all('span'):
            if 'tags:' in span.get_text().lower():
                tag_links = span.find_all('a')
                for tag_link in tag_links:
                    tag = tag_link.get_text(strip=True)
                    tags.append(tag)
                break

    hashtags = [f"#{tag.replace(' ', '').lower()}" for tag in tags]
    print(f"Extracted hashtags: {hashtags}")

    return summary, hashtags

def post_to_mastodon(content):
    mastodon = Mastodon(
        access_token=ACCESS_TOKEN,
        api_base_url=MASTODON_API_URL
    )
    response = mastodon.status_post(content)
    print(f'Response: {response}')
    if response:
        print('Successfully posted to Mastodon')
    else:
        print('Error posting to Mastodon')

def has_been_posted(post_url):
    if not os.path.exists(POSTED_URLS_FILE):
        return False
    with open(POSTED_URLS_FILE, 'r') as file:
        posted_urls = file.read().splitlines()
    return post_url in posted_urls

def mark_as_posted(post_url):
    with open(POSTED_URLS_FILE, 'a') as file:
        file.write(post_url + '\n')

if __name__ == '__main__':
    if len(sys.argv) != 2:
        print('Usage: python poast.py "Post URL"')
        sys.exit(1)
    post_url = sys.argv[1]
    print(f'Received post URL: {post_url}')
    
    if has_been_posted(post_url):
        print(f'Post URL has already been posted: {post_url}')
        sys.exit(0)
    
    summary, hashtags = extract_summary_and_tags(post_url)
    hashtags_str = ' '.join(hashtags)
    post_content = f"Posted via Nova Prime: {post_url}\n\n{summary}\n\n{hashtags_str}"
    
    # Ensure the total post content does not exceed the maximum length
    if len(post_content) > MAX_POST_LENGTH:
        available_length = MAX_POST_LENGTH - len(f"Posted via Nova Prime: {post_url}\n\n\n\n{hashtags_str}")
        summary = summary[:available_length].rsplit(' ', 1)[0] + '...'
        post_content = f"Posted via Nova Prime: {post_url}\n\n{summary}\n\n{hashtags_str}"
    
    print(f'Constructed post content: {post_content}')
    
    post_to_mastodon(post_content)
    mark_as_posted(post_url)