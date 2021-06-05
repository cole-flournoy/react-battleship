import Game from './Game'
import {Route} from 'react-router-dom'

function App() {
    return (
    <>
      <Route path='/play' render={(routerProps) => <Game {...routerProps}/> }/>
        
      <Route path='/leaderboard'>

      </Route>
      <Route path='/welcome'>

      </Route>
    </>
  );
}

export default App;
