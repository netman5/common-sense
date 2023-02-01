def every_other_item(arr)
  other_arr = []
  index = 0
  counts = 0

  while index < arr.length
    counts += 1
    other_arr << arr[index]
    index += 2

  end
  puts counts
  other_arr
end

every_other_item([1, 2, 3, 4, 6, 8])
