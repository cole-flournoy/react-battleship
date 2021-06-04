import React, {Component} from 'react'
import Grid from './Grid'
import {connect} from 'react-redux'

class Game extends Component {


  handleClick = () => {
    this.setComputerShips()
    // unmount the button
  }

  setComputerShips = () => {
    let options = Array.from(Array(100), (x, i) => i + 101)
    // console.log(options)
    options = this.setCarrier(options)
    // console.log(options)
    options = this.setBattleship(options)
    // console.log(options)
    
    }

  setCarrier = (options) => {
    const orrientation = Math.round(Math.random())
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomCell = options[randomIndex]

    if (orrientation === 0){
      if (randomCell % 10 > 6 || randomCell % 10 === 0){ 
        this.props.addCompShip([randomCell, randomCell -1, randomCell -2, randomCell -3, randomCell -4])
        // console.log(randomCell, randomCell -1, randomCell -2, randomCell -3, randomCell -4)
        return options.filter(e => e !== randomCell && e !== randomCell-1 && e !== randomCell-2 && e !== randomCell-3 && e !== randomCell-4)
         
      } else if (randomCell % 10 < 7 && randomCell % 10 !== 0){
        this.props.addCompShip([randomCell, randomCell +1, randomCell +2, randomCell +3, randomCell +4])
        // console.log(randomCell, randomCell +1, randomCell +2, randomCell +3, randomCell +4)
        return options.filter(e => e !== randomCell && e !== randomCell+1 && e !== randomCell+2 && e !== randomCell+3 && e !== randomCell+4)
      }
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 15){
        this.props.addCompShip([randomCell, randomCell -10, randomCell -20, randomCell -30, randomCell -40])
        // console.log(randomCell, randomCell -10, randomCell -20, randomCell -30, randomCell -40)
        return options.filter(e => e !== randomCell && e !== randomCell-10 && e !== randomCell-20 && e !== randomCell-30 && e !== randomCell-40)
      } else if (Math.floor(randomCell / 10) < 16){
        this.props.addCompShip([randomCell, randomCell +10, randomCell +20, randomCell +30, randomCell +40])
        // console.log(randomCell, randomCell +10, randomCell +20, randomCell +30, randomCell +40)
        return options.filter(e => e !== randomCell && e !== randomCell+10 && e !== randomCell+20 && e !== randomCell+30 && e !== randomCell+40)
      }
    }
  }

  setBattleship = (options) => {
    const orrientation = Math.round(Math.random())
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomCell = options[randomIndex]

    if (orrientation === 0){
      if (randomCell % 10 > 7 || randomCell % 10 === 0){
        if (options.filter(e => e === randomCell || e === randomCell -1 || e === randomCell -2 || e === randomCell -3).length === 4){
          this.props.addCompShip([randomCell, randomCell -1, randomCell -2, randomCell -3])
          return options.filter(e => e !== randomCell && e !== randomCell-1 && e !== randomCell-2 && e !== randomCell-3)
        } else {
          this.setBattleship(options)
        }
      } else if (randomCell % 10 < 8 && randomCell % 10 !== 0){
        if (options.filter(e => e === randomCell || e === randomCell +1 || e === randomCell +2 || e === randomCell +3).length === 4){
          this.props.addCompShip([randomCell, randomCell +1, randomCell +2, randomCell +3])
          return options.filter(e => e !== randomCell && e !== randomCell+1 && e !== randomCell+2 && e !== randomCell+3)
        } else {
          this.setBattleship(options)
        }
      }
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 16){
        if (options.filter(e => e === randomCell || e === randomCell -10 || e === randomCell -20 || e === randomCell -30).length === 4){
          this.props.addCompShip([randomCell, randomCell -10, randomCell -20, randomCell -30])
          return options.filter(e => e !== randomCell && e !== randomCell-10 && e !== randomCell-20 && e !== randomCell-30)
        } else {
          this.setBattleship(options)
        }
      } else if (Math.floor(randomCell / 10) < 17){
        if (options.filter(e => e === randomCell || e === randomCell +10 || e === randomCell +20 || e === randomCell +30).length === 4){
          this.props.addCompShip([randomCell, randomCell +10, randomCell +20, randomCell +30])
          return options.filter(e => e !== randomCell && e !== randomCell+10 && e !== randomCell+20 && e !== randomCell+30)
        } else {
          this.setBattleship(options)
        }
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