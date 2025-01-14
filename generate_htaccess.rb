require 'json'

# Read the JSON file
file_path = 'assets/data/crawlers.json'
crawlers = JSON.parse(File.read(file_path))['crawlers']

# Generate the .htaccess content
htaccess_content = <<~HTACCESS
  RewriteEngine On
  RewriteCond %{HTTP_USER_AGENT} (#{crawlers.join('|')}) [NC]
  RewriteRule ^ - [F]
HTACCESS

# Write the .htaccess file
File.open('.htaccess', 'w') do |file|
  file.write(htaccess_content)
end

puts ".htaccess file generated successfully."