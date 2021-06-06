import {Link} from 'react-router-dom'

export default function NavBar(){
  const styles = {
    padding: "20px"
  }

  return (
    <>
      <Link style={styles} to='/welcome'>Home</Link>
      <Link style={styles} to='/leaderboard'>View Leaderboard</Link>
    </>
  )
}