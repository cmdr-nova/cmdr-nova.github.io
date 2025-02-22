---
layout: log
collection: logs
date: 2025-02-22 09:03:23
tags: [programming, webdev]
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
akkoma: https://labyrinth.zone/notice/ArNXsf8rbuEqH1Jvuq
bluesky: 
wafrn: 
pillowfort: 
none: 
---
screwing with my website more an hour and a half before i have to go to work again lol

create a python script that combines 3 different ruby scripts that i use locally to create notes, posts, and logs, and simplified it all down to a single python script where I tell it what kind of content I want to publish, and then provide a title

```
import os
from datetime import datetime

def create_post(post_type, title):
    date = datetime.now()
    formatted_date = date.strftime('%Y-%m-%d')
    formatted_time = date.strftime('%Y-%m-%d %H:%M:%S')
    filename = f"{formatted_date}-{title.lower().replace(' ', '-')}.md"

    if post_type.lower() == 'log':
        directory = '_logs'
        front_matter = f"""---
layout: log
collection: logs
date: {formatted_time}
tags: []
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
akkoma: 
bluesky: 
wafrn: 
pillowfort: 
none: no_syndication_available 
---"""
    elif post_type.lower() == 'note':
        directory = '_notes'
        front_matter = f"""---
layout: note
collection: notes
date: {formatted_time}
tags: []
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
akkoma: 
bluesky: 
wafrn: 
pillowfort: 
none: no_syndication_available 
---"""
    elif post_type.lower() == 'post':
        directory = '_posts'
        front_matter = f"""---
layout: post
collection: posts
date: {formatted_time}
tags: []
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
akkoma: 
bluesky: 
wafrn: 
pillowfort: 
none: no_syndication_available 
---"""
    else:
        print("Invalid post type. Please choose Note, Log, or Post.")
        return

    # Make sure the directory exists, and create it if it doesn't
    os.makedirs(directory, exist_ok=True)

    filepath = os.path.join(directory, filename)

    # Import the predefined front matter
    content = f"{front_matter}\n\n# {title}\n\n"

    # Write it to a file
    with open(filepath, 'w') as file:
        file.write(content)

    print(f"{post_type.capitalize()} created: {filepath}")

def main():
    post_type = input("Enter the type of post (Note, Log, Post): ")
    title = input("Enter the title of the post: ")

    create_post(post_type, title)

if __name__ == "__main__":
    main()
```

