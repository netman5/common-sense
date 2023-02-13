# frozen_string_literal: true

def find_directories(directory)
  Dir.foreach(directory) do |filename|
    File.directory?("#{directory}/#{filename}") && filename != '.' && filename != '..'
    puts "#{directory}/#{filename}"
    find_directories("#{directory}/#{filename}")
  end
end

find_directories('./../../..')
