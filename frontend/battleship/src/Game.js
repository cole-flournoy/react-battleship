import React, {Component} from 'react'
import Grid from './Grid'
import {connect} from 'react-redux'

class Game extends Component {


  handleClick = () => {
    this.setComputerShips()
    // unmount the button
  }

  setComputerShips = () => {
    const options = Array.from(Array(100), (x, i) => i + 101)
    // this.setCarrier()
    const orrientation = Math.round(Math.random())
    const randomElement = Math.floor(Math.random() * options.length)
    const randomCell = options[randomElement]
    if (orrientation === 0){
      if (randomCell % 10 > 6 || randomCell % 10 === 0){
        this.props.addCompShip([randomCell, randomCell -1, randomCell -2, randomCell -3, randomCell -4])
        // add cell, cell -1, cell-2, etc. to compShips
      } else if (randomCell % 10 < 7 && randomCell % 10 !== 0){
        this.props.addCompShip([randomCell, randomCell +1, randomCell +2, randomCell +3, randomCell +4])
        // add cell, cell +1, cell+2, etc. to compShips
      }
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 15){
        this.props.addCompShip([randomCell, randomCell -10, randomCell -20, randomCell -30, randomCell -40])
        // add cell, cell -10, cell-20, etc. to compShips
      } else if (Math.floor(randomCell / 10) < 16){
        this.props.addCompShip([randomCell, randomCell +10, randomCell +20, randomCell +30, randomCell +40])
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

const mapDispatchToProps = (dispatch) => {
  return {
    addCompShip: (positionsArray) => dispatch({type: "ADD_COMP_SHIP", payload: positionsArray})
  }
}

export default connect(null, mapDispatchToProps)(Game)