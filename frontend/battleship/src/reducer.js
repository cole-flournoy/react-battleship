export default function reducer(state, action){
  switch (action.type){
    case "ADD_MYSHIP":
      return {
        myShips: [...state.myShips, action.payload], 
        compShips: state.compShips
      }
    case "REMOVE_MYSHIP":
      return {
        myShips: state.myShips.filter(s => s !== action.payload),
        compShips: state.compShips
      }
    case "ADD_COMP_SHIP":
      return {
        compShips: [...state.compShips, ...action.payload],
        myShips: state.myShips
      }
    default:
      return state
  }
}