require 'json'
require 'nokogiri'
require 'yaml'
require 'kramdown'

index = []

def extract_text(html)
  Nokogiri::HTML(html).text
end

# Function to process markdown files
def process_markdown_files(directory, type, index)
  Dir.glob("#{directory}/*.md").each do |file|
    puts "Processing #{type}: #{file}"
    content = File.read(file)
    front_matter, body = content.split("---\n")[1..2]
    metadata = YAML.load(front_matter)
    date = File.basename(file, '.md').split('-')[0..2].join('/')
    post_name = File.basename(file, '.md').split('-', 4).last
    category = metadata['categories'] ? metadata['categories'].first.downcase.gsub(' ', '%20') : directory.sub('_', '') # Use category from metadata or directory name
    html_body = Kramdown::Document.new(body).to_html
    content_text = extract_text(html_body)
    index_entry = {
      id: File.basename(file, '.md'),
      url: "/#{category}/#{date}/#{post_name}.html",
      content: content_text,
      type: type
    }
    if type == 'note' || type == 'log'
      index_entry[:avatar] = metadata['avatar']
      index_entry[:author] = metadata['author']
      index_entry[:date] = metadata['date']
    else
      index_entry[:title] = metadata['title'] || 'No title'
    end
    index << index_entry
  end
end

# Process posts
process_markdown_files('_posts', 'post', index)

# Process notes
process_markdown_files('_notes', 'note', index)

# Process logs
process_markdown_files('_logs', 'log', index)

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
    content: content,
    type: 'page'
  }
end

json_file_path = "search-index.json"
File.open(json_file_path, 'w') do |file|
  file.write(JSON.pretty_generate(index))
end

puts "Search index written to #{json_file_path}"

if File.exist?(json_file_path)
  puts "Search index successfully created at #{json_file_path}"
else
  puts "Error: Search index not found in the root directory"
end

puts "Search index generated with #{index.size} entries at #{json_file_path}."