require 'json'
require 'nokogiri'
require 'yaml'
require 'kramdown'

# Initialize an empty array to hold the index data
index = []

# Function to extract text content from HTML
def extract_text(html)
  Nokogiri::HTML(html).text
end

# Process posts
Dir.glob("_posts/*.md").each do |file|
  puts "Processing post: #{file}"
  content = File.read(file)
  front_matter, body = content.split("---\n")[1..2]
  metadata = YAML.load(front_matter)
  title = metadata['title'] || 'No title'
  categories = metadata['categories'] || []
  category_path = categories.map(&:downcase).join('/')
  date = File.basename(file, '.md').split('-')[0..2].join('/')
  post_name = File.basename(file, '.md').split('-', 4).last
  html_body = Kramdown::Document.new(body).to_html
  content_text = extract_text(html_body)
  index << {
    id: File.basename(file, '.md'),
    title: title,
    url: "/#{category_path}/#{date}/#{post_name}.html",
    content: content_text
  }
end

# Process pages
Dir.glob("*.html").each do |file|
  next if file.include?('404.html') # Skip 404 page
  puts "Processing page: #{file}"
  doc = Nokogiri::HTML(File.read(file))
  title = doc.at_css('title')&.text || 'No title'
  content = extract_text(doc.at_css('body')&.inner_html || '')
  index << {
    id: File.basename(file, '.html'),
    title: title,
    url: "/#{file}",
    content: content
  }
end

# Write the index to a JSON file in the root directory
json_file_path = "search-index.json"
File.open(json_file_path, 'w') do |file|
  file.write(JSON.pretty_generate(index))
end

puts "Search index written to #{json_file_path}"

# Verify the file exists in the root directory
if File.exist?(json_file_path)
  puts "Search index successfully created at #{json_file_path}"
else
  puts "Error: Search index not found in the root directory"
end

puts "Search index generated with #{index.size} entries at #{json_file_path}."