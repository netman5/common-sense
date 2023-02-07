# frozen_string_literal: true

class Linter
  attr_reader :error

  def initialize
    @stack = []
  end

  def lint(text)
    text.each_char.with_index do |char, index|
      if opening_brace?(char)
        @stack.push(char)
      elsif closing_bracket?(char)

        if closes_most_recent_opening_brace?(char)
          @stack.pop
        else
          @error = "Incorrect closing brace: #{char} at index #{index}"
          return
        end
      end
    end

    return unless @stack.any?

    @error = "#{@stack.last} does not have a closing brace at #{index}"
  end

  private

  def opening_brace?(char)
    ['(', '[', '{'].include?(char)
  end

  def closing_bracket?(char)
    [')', ']', '}'].include?(char)
  end

  def opening_brace_of(char)
    { ')' => '(', ']' => '[', '}' => '{' }[char]
  end

  def most_recent_opening_brace
    @stack.last
  end

  def closes_most_recent_opening_brace?(char)
    opening_brace_of(char) == most_recent_opening_brace
  end
end

linter = Linter.new
linter.lint('(var x = { y: [1, 2, 3] } )')
puts linter.error
