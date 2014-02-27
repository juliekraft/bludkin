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


users = User.create([{ email: "sue@email.com", name: "Sue"}, {email: "jo@email.com", name: "JO"}, {email: "julie@email.com", name: "Julie"}, {email: "meghann@email.com", name: "Meghann"} ])

follows = Follow.create([{ follower_id: User.first, followee_id: User.last}])

cycle = Cycle.create([{ start_date: Time.now, period_end_date: Date.new(2014,02,15), cycle_end_date: Date.new(2014, 02, 20), user_id: User.first}, {start_date: Time.now, period_end_date: Date.new(2014,01,15), cycle_end_date: Date.new(2014, 01, 20), user_id: User.first}])

# messages = Message.create({to_id: 1, from_id: 2, message: "I love bleeding"}, {to_id: 2, from_id: 1, message: "I love bloods."}, {to_id: 4, from_id: 3, message: "Bloods is badass"})
