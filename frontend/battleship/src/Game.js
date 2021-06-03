import React, {Component} from 'react'
import Grid from './Grid'

export default class Game extends Component {

  // get myShips from redux state 

  render(){
    return(
      <>
        <Grid/>
        {/* <Grid/> // one for self and one for opponent*/}
      </>
    )
  }
}