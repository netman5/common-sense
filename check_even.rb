# frozen_string_literal: true

def every_other_item(array)
  new_arr = []
  steps = 0

  array.each_with_index do |element, index|
    steps += 1
    new_arr << element if index.even?
  end
  puts steps
  new_arr
end

every_other_item([1, 2, 3, 4, 6, 8])
