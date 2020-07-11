require Rails.root.join("data", "urls.rb")

#User Creation
  User.create(email: "alex@gmail.com", name: "alex", password: 'password', password_confirmation: 'password')
  User.create(email: "bob@gmail.com", name: "bob", password: 'password', password_confirmation: 'password')
  User.create(email: "chris@gmail.com", name: "chris", password: 'password', password_confirmation: 'password')
  User.create(email: "sam@gmail.com", name: "sam", password: 'password', password_confirmation: 'password')
  User.create(email: "bill@gmail.com", name: "bill", password: 'password', password_confirmation: 'password')
  User.create(email: "matt@gmail.com", name: "matt", password: 'password', password_confirmation: 'password')
  User.create(email: "juan@gmail.com", name: "juan", password: 'password', password_confirmation: 'password')


  #Collection Creation

  7.times do
    Collection.create(user_id: (rand(6)+1), 
    name: Faker::Movies::HarryPotter.location,
    description: Faker::Hipster.words,
    )
  end


  #Create a Thing

  IMAGE_URLS.map { |url|
    Thing.create(
      name: Faker::Movies::StarWars.planet,
      description: Faker::Lorem.sentence,
      image: url,
      collection_id: (rand(6)+1)
    )
  }

  25.times do
    Review.create(
    score: (rand(9)+1),
    title: Faker::Games::SuperSmashBros.fighter,
    comment: Faker::Lorem.sentence,
    thing_id: (rand(26)+1)
    )
  end

  puts "Data Seeeded"
  puts "Emails: alex@gmail.com, bob@gmail.com, chris@gmail.com, sam@gmail.com, bill@gmail.com, matt@gmail.com, juan@gmail.com password: 'password' "

  
