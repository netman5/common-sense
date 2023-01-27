# frozen_string_literal: true

def linear_search(array, value)
  array.each do |element|
    if element == value
      return value

    elsif element > value
      break
    end
  end

  nil
end
