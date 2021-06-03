import React, {Component} from 'react'
import Grid from './Grid'

export default class Game extends Component {


  handleClick = () => {
    this.setComputerShips()
    // unmount the button
  }

  setComputerShips = () => {
    const options = Array.from(Array(100), (x, i) => i + 101)
    // this.setCarrier()
    const orrientation = Math.round(Math.random())
    const randomCell = Math.floor(Math.random() * options.length)
    if (orrientation === 0){
      if (randomCell % 10 > 6 || randomCell % 10 === 0){
        // add cell, cell -1, cell-2, etc. to compShips
      } else if (randomCell % 10 < 7 && randomCell % 10 !== 0){
        // add cell, cell +1, cell+2, etc. to compShips
      }
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 5){
        // add cell, cell -10, cell-20, etc. to compShips
      } else if (Math.floor(randomCell / 10) < 6){
        // add cell, cell +10, cell+20, etc. to compShips
      }
    }


  }

  render(){
    return(
      <>
        <Grid board="player"/>
        <Grid board="computer"/>
        <button style={{margin: "15px", padding: "20px", paddingTop: "20px", textAlign: "center"}} onClick={this.handleClick}>Set Opponent's Ships</button>
      </>
    )
  }
}