# frozen_string_literal: true

def loop_arr(arr)
  index = 0
  last_item = arr.last
  return arr[index] if arr[index] == last_item

  puts "#{loop_arr(index + 1)} #{arr[index]}"
end

puts loop_arr([1, 2, 3, 4, 6, 8])
