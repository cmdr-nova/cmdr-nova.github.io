require 'json'
require 'yaml'
require 'nokogiri'
require 'date'

posts_dir = '_posts'
output_file = 'assets/js/posts_metadata.json'

posts_metadata = []

Dir.glob("#{posts_dir}/*.md").each do |file|
  content = File.read(file)
  front_matter, body = content.split("---\n")[1..2]
  metadata = YAML.load(front_matter)
  doc = Nokogiri::HTML(body)
  first_image = doc.css('img').first
  image_url = first_image ? first_image['src'] : nil
  category = metadata['categories'] ? metadata['categories'].first.downcase.gsub(' ', '%20') : ''
  
  date_str = metadata['date'].is_a?(String) ? metadata['date'] : metadata['date'].to_s
  date = DateTime.parse(date_str).strftime('%Y/%m/%d')
  
  title = file.gsub('_posts/', '').gsub(/^\d{4}-\d{2}-\d{2}-/, '').gsub('.md', '')
  url = "/#{category}/#{date}/#{title}.html"
  posts_metadata << {
    'title' => metadata['title'],
    'url' => url,
    'date' => metadata['date'],
    'image' => image_url
  }
end

File.open(output_file, 'w') do |file|
  file.write(JSON.pretty_generate(posts_metadata))
end

puts "Posts metadata generated at #{output_file}"