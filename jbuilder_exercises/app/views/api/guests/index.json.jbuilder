json.array! @guests.each do |guest|
  json.partial! 'guest', guest: guest if (40..50).include?(guest.age)
end
