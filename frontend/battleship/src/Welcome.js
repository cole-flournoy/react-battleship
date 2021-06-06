import UserForm from './UserForm'

export default function Welcome(){
  return(
    <div>
      <h1>Welcome to React Battleship!</h1>
      <h4>Log in with your username or create a new one to start a game</h4>
      <UserForm />
    </div>
  )
}