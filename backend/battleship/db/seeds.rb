# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


cole = User.create(username: "cole")
Game.create([{win: true, accuracy: 50.0, user: cole}, {win: true, accuracy: 75.5, user: cole}, {win: false, accuracy: 32.8, user: cole}, {win: true, accuracy: 99.9, user: cole}])

h = User.create(username: "htrow")
Game.create([{win: false, accuracy: 43.1, user: h}, {win: true, accuracy: 77.7, user: h}, {win: true, accuracy: 81.2, user: h}, {win: false, accuracy: 56.7, user: h}, {win: false, accuracy: 40.8, user: h}, {win: true, accuracy: 89.4, user: h}])

