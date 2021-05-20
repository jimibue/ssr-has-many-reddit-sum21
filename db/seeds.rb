# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
Sub.destroy_all

10.times do
  x = Faker::Verb.simple_present
  y = Faker::Verb.ing_form
  z = Faker::Verb.base
  
  sub = Sub.create(name: "#{x} #{y} #{z}")
  4.times do
    topic = sub.topics.create(name: Faker::Verb.simple_present, body: Faker::Quote.famous_last_words)
    
    2.times do 
      topic.comments.create( body: Faker::ChuckNorris.fact)
    end
    # this also would work
    # Topic.create(sub_id:sub.id, name: Faker::Verb.simple_present, body: Faker::Quote.famous_last_words)
  end

end
puts "seeded #{Sub.all.size} Subs"
puts "first sub name: #{Sub.first.name}"
puts "seeded #{Topic.all.size} Topics"
puts "first topic name: #{Sub.first.topics.first.name}"

puts "seeded #{Comment.all.size} Comments"
