export default function reducer(state, action){
  switch (action.type){
    case "ADD_MYSHIP":
      return {
        myShips: [...state.myShips, action.payload], 
        compShips: state.compShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: state.myHits,
        compHits: state.compHits,
        usersArray: state.usersArray
      }
    case "REMOVE_MYSHIP":
      return {
        myShips: state.myShips.filter(s => s !== action.payload),
        compShips: state.compShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: state.myHits,
        compHits: state.compHits,
        usersArray: state.usersArray
      }
    case "ADD_COMP_SHIP":
      return {
        compShips: [...state.compShips, ...action.payload],
        myShips: state.myShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: state.myHits,
        compHits: state.compHits,
        usersArray: state.usersArray
      }
    case "ADD_GUESS":
      return{
        compShips: state.compShips,
        myShips: state.myShips,
        compCanGuess: state.compCanGuess.filter(p => p !== action.payload),
        compHasGuessed: [...state.compHasGuessed, action.payload],
        myHits: state.myHits,
        compHits: state.compHits,
        usersArray: state.usersArray
      }
    case "ADD_MY_HIT":
      return {
        compShips: state.compShips,
        myShips: state.myShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: [...state.myHits, action.payload],
        compHits: state.compHits,
        usersArray: state.usersArray
      }
    case "ADD_COMP_HIT":
      return {
        compShips: state.compShips,
        myShips: state.myShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: state.myHits,
        compHits: [...state.compHits, action.payload],
        usersArray: state.usersArray
      }
    case "GET_USERS":
      return {
        compShips: state.compShips,
        myShips: state.myShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed,
        myHits: state.myHits,
        compHits: state.compHits,
        usersArray: [...state.usersArray, action.payload][0]
      }
    default:
      return state
  }
}