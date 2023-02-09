# frozen_string_literal: true

def count_down(number)
  puts number
  return if number.zero?

  count_down(number - 1)
end

count_down(10)
