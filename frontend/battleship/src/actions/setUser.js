export default function setUser(username){
  return (dispatch) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({username})
    }
    
    fetch("http://localhost:3001/users", options)
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .then(currentUser => {
      dispatch({type: "SET_USER", payload: currentUser})
    })
    .catch(error => alert(error))
  }
}