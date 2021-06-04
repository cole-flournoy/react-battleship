export default function reducer(state, action){
  switch (action.type){
    case "ADD_MYSHIP":
      return {
        myShips: [...state.myShips, action.payload], 
        compShips: state.compShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed
      }
    case "REMOVE_MYSHIP":
      return {
        myShips: state.myShips.filter(s => s !== action.payload),
        compShips: state.compShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed
      }
    case "ADD_COMP_SHIP":
      return {
        compShips: [...state.compShips, ...action.payload],
        myShips: state.myShips,
        compCanGuess: state.compCanGuess,
        compHasGuessed: state.compHasGuessed
      }
    default:
      return state
  }
}