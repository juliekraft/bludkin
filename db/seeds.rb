# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Follow.delete_all
Message.delete_all
Cycle.delete_all
CycleContent.delete_all


users = User.create([{ email: "sue@email.com", name: "Sue", password: "password", image: "http://placekitten.com/300/200"}, {email: "jo@email.com", name: "JO", password: "password", image: "http://placekitten.com/300/200"}, {email: "julie@email.com", name: "Julie", password: "password", image: "http://placekitten.com/200/300"}, {email: "meghann@email.com", name: "Meghann", password: "password", image: "http://placekitten.com/300/200"} ])

follows = Follow.create([{ follower: User.first, followee: User.last}])

user_first = User.first

cycle = Cycle.create([{ start_date: Date.new(2014,01,01), period_end_date: Date.new(2014,01,04), cycle_end_date: Date.new(2014, 02, 01), user_id: user_first.id}, {start_date: Date.new(2014, 02, 01), period_end_date: Date.new(2014,02, 05), cycle_end_date: Date.new(2014, 03, 05), user_id: user_first.id}, {start_date: Date.new(2014, 03, 05), period_end_date: Date.new(2014,02, 10), cycle_end_date: Date.new(2014, 04, 05), user_id: user_first.id}])

# messages = Message.create({to_id: 1, from_id: 2, message: "I love bleeding"}, {to_id: 2, from_id: 1, message: "I love bloods."}, {to_id: 4, from_id: 3, message: "Bloods is badass"})


