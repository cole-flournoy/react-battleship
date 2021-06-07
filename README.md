# README

This is a Battleship (the kids board game) clone using React for the frontend and a Rails API (using Postgres) for the backend. Enjoy!  

## Installation

Backend:
1. `cd backend/battleship` to get to the Rails side
2. `bundle install` to make sure you have the backend dependencies
2. `rails db:create` to create your databases
3. `rails db:migrate` and `rails db:seed` to populate the database
4. `rails s` to start up your server (make sure React and Rails are running on different ports - e.g. localhost:/3000 & localhost:/3001)

Now you're ready to start making requests to the API! 

Frontend:
1. `cd frontend/battleship` to get to the React app
2. `npm install` to get frontend dependencies
3. `npm start` to launch React in your default browser

After that, you're ready to play some Battleship!

## Gameplay / Instructions

1. Enter a username to get started
2. Click any square on "My Board" to start placing your ships
  a. As with the original game, you have 5 ships to place vertically or     horizontally on your board:
    - Carrier: takes up 5 spaces
    - Battleship: takes up 4 spaces
    - Cruiser: takes up 3 spaces
    - Submarine: takes up 3 spaces
    - Destroyer: takes up 2 spaces
  b. You can select and unselect any boxes if you want to move your ships *up until* the last ship is fully placed. After that, all ships will be locked
  c. As of now, the placement rules for the ships is on the honor system until more checks are added
3. Click the button at the bottom of the screen to place the computer's ships
4. Click on any square on "Computer Board" to start making guesses
  a. Hits will be marked with red squares and misses with white squares
  b. As soon as you guess, the computer will make a move of it's own (which you can see reflected on "My Board")


## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cole-flournoy/react-battleship.


## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).


------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

