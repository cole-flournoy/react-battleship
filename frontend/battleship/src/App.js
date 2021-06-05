import Game from './Game'
import {Route} from 'react-router-dom'
import NavBar from './NavBar'
import Leaderboard from './Leaderboard'

function App() {
    return (
    <>
      <NavBar/>
      <Route path='/play'>
        <Game/>
      </Route>
      <Route path='/leaderboard'>
        <Leaderboard />
      </Route>
      <Route path='/welcome'>

      </Route>
    </>
  );
}

export default App;
