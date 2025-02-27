#!/bin/bash

# Define the base directory
BASE_DIR="/home/cmdr-nova/Documents/Website/cmdr-nova.github.io"

# Syndicate Toots
python3 "$BASE_DIR/syndicate_toots.py"

# Generate new sitemap
python3 "$BASE_DIR/generate_sitemap.py"

# Generate tags
python3 "$BASE_DIR/generate_tags.py"

# Generate toots metadata
ruby "$BASE_DIR/generate_toots_metadata.rb"

# Generate post metadata
ruby "$BASE_DIR/generate_posts_metadata.rb"

# Generate the search index
ruby "$BASE_DIR/generate_search_index.rb"

# Generate .htaccess file
ruby "$BASE_DIR/generate_htaccess.rb"

# Generate RSS feed
ruby "$BASE_DIR/generate_feed.rb"

# Build the Jekyll site
cd "$BASE_DIR"
bundle exec jekyll build