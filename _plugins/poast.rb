require 'shellwords'
require 'nokogiri'

Jekyll::Hooks.register :posts, :post_write do |post|
  # Extract the first paragraph as a summary
  doc = Nokogiri::HTML(post.content)
  summary = doc.css('p').first&.text || "No summary available"

  # Extract the tag from the front matter
  tag = post.data['tag']
  hashtag = tag ? "##{tag.gsub(' ', '').downcase}" : ""

  # Construct the post content
  post_content = "New post published: #{post.data['title']} - #{post.url}\n\n#{summary}\n\n#{hashtag}"
  escaped_post_content = Shellwords.escape(post_content)

  puts "Post content: #{post_content}"
  puts "Escaped post content: #{escaped_post_content}"
  puts "Summary: #{summary}"
  puts "Hashtag: #{hashtag}"

  # Execute the SSH command to run the Python script
  system("ssh root@67.205.188.225 \"python3 masto-poast/poast.py #{escaped_post_content}\"")
end