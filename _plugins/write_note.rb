module Jekyll
  class WriteNote < Command
    class << self
      def init_with_program(prog)
        puts "Loading WriteNote plugin..." # Debug message
        prog.command(:write) do |c|
          c.syntax 'write [NOTE_CONTENT]'
          c.description 'Create a new note with the provided content'
          c.option 'author', '--author AUTHOR', 'Author of the note'
          c.option 'date', '--date DATE', 'Date of the note'
          c.option 'tags', '--tags TAGS', 'Tags for the note'

          c.action do |args, options|
            note_content = args.join(' ')
            author = options['author'] || 'cmdr_nova'
            date = options['date'] || Time.now.strftime('%Y-%m-%d %H:%M:%S')
            tags = options['tags'] || 'note, update'

            create_note(note_content, author, date, tags)
          end
        end
      end

      def create_note(content, author, date, tags)
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
    end
  end
end