require 'fileutils'
require 'time'

desc 'Create a new note'
task :write, [:content, :author, :date, :tags] do |t, args|
  content = args[:content] || 'This is a note without a title.'
  author = args[:author] || 'cmdr_nova'
  date = args[:date] || Time.now.strftime('%Y-%m-%d %H:%M:%S')
  tags = args[:tags] || 'note, update'

  notes_dir = '_notes'
  FileUtils.mkdir_p(notes_dir) unless Dir.exist?(notes_dir)

  filename = "#{notes_dir}/#{Time.now.strftime('%Y-%m-%d')}-note.md"
  front_matter = <<~FRONT_MATTER
    ---
    layout: note
    author: #{author}
    date: #{date}
    tags: [#{tags}]
    ---
  FRONT_MATTER

  File.open(filename, 'w') do |file|
    file.puts front_matter
    file.puts content
  end

  puts "Note created at #{filename}"
end