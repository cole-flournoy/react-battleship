export default function reducer(state, action){
  switch (action.type){
    case "ADD_MYSHIP":
      return {myShips: [...state.myShips, action.payload]}
    case "REMOVE_MYSHIP":
      return {myShips: state.myShips.filter(s => s !== action.payload)}
    default:
      return state
  }
}