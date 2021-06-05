export default function getUsers(){
  return function(dispatch){
    fetch("http://localhost:3001/users")
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .then(usersArray => {
      dispatch({type: "GET_USERS", payload: usersArray})
    })
    .catch(error => alert(error))
  }
}