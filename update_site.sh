#!/bin/bash

# Redirect output to a log file
exec > /home/cmdr-nova/Documents/Website/cmdr-nova.github.io/update_site.log 2>&1

# Navigate to the website directory
cd /home/cmdr-nova/Documents/Website/cmdr-nova.github.io

# Fetch new posts
export MASTODON_ACCESS_TOKEN=your_access_token_here

PREVIOUS_SINCE_ID=""

# Function to delete posts containing the specified phrase
delete_posts_with_phrase() {
  local phrase="$1"
  local directory="$2"
  for post_file in "$directory"/*.md; do
    if grep -q "$phrase" "$post_file"; then
      echo "Excluding post: $post_file"
      rm "$post_file"
    fi
  done
}

while true; do
  SINCE_ID=$(test -f /home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/first && cat /home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/first || echo '')
  
  if [[ "$SINCE_ID" == "$PREVIOUS_SINCE_ID" ]]; then
    echo "No new posts. Exiting"
    break
  fi

  command="/home/cmdr-nova/.local/go/bin/mastodon-markdown-archive --dist=/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots \
    --exclude-replies=true \
    --exclude-reblogs=true \
    --user=https://mastodon.online/@cmdr_nova \
    --porcelain=true \
    --visibility=public \
    --download-media=bundle \
    --threaded=true \
    --persist-first=/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots/first \
    --since-id=$SINCE_ID \
    --template=/home/cmdr-nova/jekyll.tmpl \
    --filename={{.Post.Id}}.md"
  
  output=$($command)

  if [[ "$output" -eq 0 ]]; then
    echo "No new posts. Exiting"
    break
  fi
  echo "Fetched $output posts. Continuing."
  
  # Delete posts containing the phrase "Posted via Nova Prime:"
  delete_posts_with_phrase "Posted via Nova Prime:" "/home/cmdr-nova/Documents/Website/cmdr-nova.github.io/_toots"
  
  PREVIOUS_SINCE_ID=$SINCE_ID
  sleep 1
done

# Define the base directory
BASE_DIR="/home/cmdr-nova/Documents/Website/cmdr-nova.github.io"

# Syndicate Toots
/usr/bin/python3 "$BASE_DIR/syndicate_toots.py"

/usr/bin/python3 "$BASE_DIR/generate_sitemap.py"

/usr/bin/python3 "$BASE_DIR/generate_tags.py"

/usr/bin/ruby "$BASE_DIR/generate_toots_metadata.rb"

/usr/bin/ruby "$BASE_DIR/generate_posts_metadata.rb"

/usr/bin/ruby "$BASE_DIR/generate_search_index.rb"

/usr/bin/ruby "$BASE_DIR/generate_htaccess.rb"

/usr/bin/ruby "$BASE_DIR/generate_feed.rb"

/usr/local/bin/bundle exec jekyll build

/usr/bin/git add .
/usr/bin/git commit -m "Update site with new posts"
/usr/bin/git push origin master
