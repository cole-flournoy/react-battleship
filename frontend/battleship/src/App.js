import Game from './game/Game'
import {Route} from 'react-router-dom'
import NavBar from './NavBar'
import Leaderboard from './leaderboard/Leaderboard'

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
