---
layout: post
collection: posts
date: 2025-03-09 21:21:03
title: Ingest Your Bluesky Posts To Jekyll
categories:
    - "social-media"
tags: [webdev, social-media, bluesky]
pinned: false
author: ⸸ commander ░ nova ⸸ :~$
avatar: /img/avatar/daemon.jpeg
mastodon: https://mastodon.online/@cmdr_nova/114135755156614585
akkoma: 
bluesky: 
wafrn: 
pillowfort: 
tumblr: 
none: 
---
Recently, I figured out how to get the mastodon-markdown-archive script working, which is a great script, and you should check it out, <a href="https://git.garrido.io/gabriel/mastodon-markdown-archive#installation" target="_blank">here</a>. But! I wanted to do the same thing with Bluesky, in the case that Bluesky could be bought out by billionaires and destroyed in the same way that Twitter was. And, because I *lost* my entire decade-old Twitter account and all of its content, I also want to make sure that *never happens again*.

So, I've made a Ruby script that you can use on a Jekyll site to automatically import anything from your Bluesky RSS feed, directly into your website under a "_skeets" directory, which includes images as media, and excludes reposts, quote posts, and replies (or should!)

It is as follows:

{% raw %}
```
require 'rss'
require 'fileutils'
require 'jekyll'
require 'open-uri'
require 'nokogiri'

# Defining the RSS feed URL and where it should be located on your site
RSS_FEED_URL = 'https://bsky.app/profile/did:plc:zzofxcatgqb5wpkqetnng4wo/rss' # Don't use my feed URL, replace this with your own
OUTPUT_DIR = '_skeets'
MEDIA_DIR = 'assets/media'
LAST_IMPORTED_FILE = 'last_imported_guid.txt'

# Script creates directories if they don't already exist
FileUtils.mkdir_p(OUTPUT_DIR)
FileUtils.mkdir_p(MEDIA_DIR)

# Sanitize filenames, because bsky does it all weird and stuff
def sanitize_filename(filename)
  base = File.basename(filename, ".*")
  ext = File.extname(filename).gsub('@', '.')
  sanitized_base = base.gsub(/[^0-9A-Za-z.\-]/, '_').gsub(/_+/, '_')
  "#{sanitized_base}#{ext}"
end

# Convert URLs included in posts into an anchor that can be clicked
def convert_urls_to_links(content)
  content.gsub(/(https?:\/\/[^\s]+)(?![^<]*>)/, '<a href="\1" target="_blank">\1</a>')
end

# Download images as media, and update the content
def download_images_and_update_content(content, media_dir)
  content.gsub(/<img src="(https?:\/\/[^\s]+)"[^>]*>/) do |match|
    image_url = $1
    image_filename = sanitize_filename(File.basename(image_url).gsub('@', '.'))
    image_path = "#{media_dir}/#{image_filename}"
    
    puts "Found image URL: #{image_url}"
    puts "Downloading image: #{image_url} to #{image_path}"
    
    begin
      # Download media
      URI.open(image_url) do |image|
        File.open(image_path, 'wb') do |file|
          file.write(image.read)
        end
      end
      puts "Successfully downloaded image: #{image_url}"
    rescue StandardError => e
      puts "Failed to download image: #{image_url}. Error: #{e.message}"
    end
    
    # Update the path to the image so that it displays correctly
    "<img src=\"/#{image_path}\" alt=\"Image\">"
  end
end

# Fetch and parse post content in order to find images, because, by default, they aren't displayed in the RSS feed
def fetch_and_parse_skeet_content(url)
  begin
    html_content = URI.open(url).read
    document = Nokogiri::HTML(html_content)
    images = document.css('meta[property="og:image"]').map { |meta| meta['content'] }
    puts "Found images: #{images}" if images.any?
    images
  rescue StandardError => e
    puts "Failed to fetch or parse skeet content: #{url}. Error: #{e.message}"
    []
  end
end

# Read the last imported GUID from the created file
last_imported_guid = if File.exist?(LAST_IMPORTED_FILE)
                       File.read(LAST_IMPORTED_FILE).strip
                     else
                       nil
                     end

# Fetch and parse the RSS feed
begin
  rss_content = URI.open(RSS_FEED_URL).read
  rss = RSS::Parser.parse(rss_content, false)

  # Iterate through each item in the RSS feed
  rss.items.each do |item|
    puts "Processing item: #{item.title}"
    puts "Description: #{item.description}"
    
    break if item.guid.content == last_imported_guid

    # Exclude replies, reposts, and quote posts
    next if item.title&.start_with?('Re:') || item.title&.start_with?('RT:') || item.description.include?("[contains quote post or other embedded content]")

    # Sanitize the filename
    sanitized_filename = sanitize_filename(item.guid.content)
    filename = "#{OUTPUT_DIR}/#{sanitized_filename}.md"
    
    # Fetch and parse content to find images
    images = fetch_and_parse_skeet_content(item.link)
    images.each do |image_url|
      # Download image and update
      downloaded_image_tag = download_images_and_update_content("<img src=\"#{image_url}\" alt=\"Image\">", MEDIA_DIR)
      item.description += downloaded_image_tag
    end

    # Create a Markdown file for each feed item with Jekyll front matter (customize this do be whatever you normally use)
    File.open(filename, 'w') do |file|
      file.write("---\n")
      file.write("layout: skeet\n")
      file.write("title: \"#{item.title || 'New Skeet'}\"\n")
      file.write("date: #{item.pubDate}\n")
      file.write("author: ⸸ commander ░ nova ⸸ :~$\n")
      file.write("collection: skeets\n")
      file.write("guid: #{item.guid.content}\n")
      file.write("avatar: /img/avatar/daemon.jpeg\n")
      file.write("bluesky: #{item.link}\n")
      file.write("---\n\n")
  
      # Convert URLs in the content to HTML anchors
      content = convert_urls_to_links(item.description)
      
      file.write("#{content}\n")
    end
  end

  # Update the last imported GUID
  File.write(LAST_IMPORTED_FILE, rss.items.first.guid.content) if rss.items.any?

  puts "Successfully converted RSS feed to Markdown files in #{OUTPUT_DIR}."

rescue StandardError => e
  puts "An error occurred: #{e.message}"
end
```
{% endraw %}

And there you have it. Using this Ruby alongside Jekyll, you can import everything you post to Bluesky as native "posts" on a Jekyll site, from just your Bluesky RSS feed! Now, this *isn't* going to import your entire posting history thus far (that would be problematic, especially if you've got a large history), but, it's a good starting point to making yourself billionaire proof.

I don't fully believe, or *trust* that Bluesky can't be corrupted by money and corporations, and that doesn't have to even matter, if all of your content, and the essence of *you*, is hosted on *your own site*.

Obviously, other things, like *displaying* these on a Jekyll feed, are things you'll need to configure. But it *should* be as easy as specifying ...

{% raw %}
```
{% assign skeets_array = site.skeets %}
```
{% endraw %}

and then ...

{% raw %}
```
  {% for item in paginated_array %}
    {% assign post_type = item.collection %}
        {% elsif post_type == "skeets" %}
      {% assign icon = "ph ph-butterfly" %}
      {% assign verb = "Skeeted" %}
      {% assign content = item.content %}
```
{% endraw %}

But, it *is* assumed that if you're doing this, you *might* have some knowledge of how Jekyll and Liquid syntax works.

Either way, have fun turning your website into a compendium of everything you say and do!