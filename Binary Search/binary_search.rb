# frozen_string_literal: true

def binary_search(array, value)
  steps = 0
  lower_bound = 0
  upper_bound = array.length - 1
  while lower_bound <= upper_bound
    steps += 1
    midpoint = (upper_bound + lower_bound) / 2

    value_at_midpoint = array[midpoint]

    if value < value_at_midpoint
      upper_bound = midpoint - 1

    elsif value > value_at_midpoint
      lower_bound = midpoint + 1

    elsif value == value_at_midpoint
      return midpoint
    end
    puts steps
  end
  nil
end
array = [1, 4, 6, 7, 9, 16, 20]
binary_search(array, 5)
