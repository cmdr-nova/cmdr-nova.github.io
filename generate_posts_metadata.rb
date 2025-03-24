require 'json'
require 'yaml'
require 'nokogiri'
require 'date'

def generate_metadata(directory, output_file)
  metadata = []

  Dir.glob("#{directory}/*.md").each do |file|
    content = File.read(file)
    front_matter, body = content.split("---\n")[1..2]
    data = YAML.load(front_matter)
    doc = Nokogiri::HTML(body)
    first_image = doc.css('img').first
    image_url = first_image ? first_image['src'] : nil
    category = data['categories'] ? data['categories'].first.downcase.gsub(' ', '%20') : ''
    
    date_str = data['date'].is_a?(String) ? data['date'] : data['date'].to_s
    date = DateTime.parse(date_str).strftime('%Y/%m/%d')
    
    title = data['title'] || file.gsub("#{directory}/", '').gsub(/^\d{4}-\d{2}-\d{2}-/, '').gsub('.md', '').split('-').map(&:capitalize).join(' ')
    clean_directory = directory.gsub(/^_/, '')  # Remove leading underscore

    # Remove unwanted characters from title for URL and convert to lowercase
    url_title = title.gsub(/[^\w\s-]/, '').gsub(' ', '-').downcase
    url_title = url_title.gsub(/-+/, '-')  # Replace multiple hyphens with a single hyphen

    if clean_directory == 'posts'
      url = "/#{category}/#{date}/#{url_title}.html".gsub('//', '/')
    else
      url = "/#{clean_directory}/#{date}/#{url_title}".gsub('//', '/')
    end

    metadata << {
      'title' => title.split('-').map(&:capitalize).join(' '),  # Capitalize each word in the title for display
      'url' => url,
      'date' => data['date'],
      'image' => image_url
    }
  end

  File.open(output_file, 'w') do |file|
    file.write(JSON.pretty_generate(metadata))
  end

  puts "#{directory.capitalize} metadata generated at #{output_file}"
end

generate_metadata('_posts', 'assets/js/posts_metadata.json')
generate_metadata('_notes', 'assets/js/notes_metadata.json')
generate_metadata('_logs', 'assets/js/logs_metadata.json')
generate_metadata('_skeets', 'assets/js/skeets_metadata.json')
generate_metadata('_texts', 'assets/js/texts_metadata.json')