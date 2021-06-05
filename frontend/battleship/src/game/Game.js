import React, {Component} from 'react'
import Grid from './Grid'
import {connect} from 'react-redux'



class Game extends Component {


  handleClick = () => {
    let button = document.getElementById('compShipsButton')
    button.remove()
    this.setComputerShips()
  }

  setComputerShips = () => {
    let options = Array.from(Array(100), (x, i) => i + 101)
    options = this.setCarrier(options)
    options = this.setBattleship(options)
    options = this.setCruiserOrSubmarine(options)
    options = this.setCruiserOrSubmarine(options)
    options = this.setDestroyer(options)
    // console.log(options)
    // console.log(100 - options.length)


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
          // console.log("tried")
          return this.setBattleship(options)
        }
      } else if (randomCell % 10 < 8 && randomCell % 10 !== 0){
        if (options.filter(e => e === randomCell || e === randomCell +1 || e === randomCell +2 || e === randomCell +3).length === 4){
          this.props.addCompShip([randomCell, randomCell +1, randomCell +2, randomCell +3])
          return options.filter(e => e !== randomCell && e !== randomCell+1 && e !== randomCell+2 && e !== randomCell+3)
        } else {
          // console.log("tried")
          return this.setBattleship(options)
        }
      }
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 16){
        if (options.filter(e => e === randomCell || e === randomCell -10 || e === randomCell -20 || e === randomCell -30).length === 4){
          this.props.addCompShip([randomCell, randomCell -10, randomCell -20, randomCell -30])
          return options.filter(e => e !== randomCell && e !== randomCell-10 && e !== randomCell-20 && e !== randomCell-30)
        } else {
          // console.log("tried")
          return this.setBattleship(options)
        }
      } else if (Math.floor(randomCell / 10) < 17){
        if (options.filter(e => e === randomCell || e === randomCell +10 || e === randomCell +20 || e === randomCell +30).length === 4){
          this.props.addCompShip([randomCell, randomCell +10, randomCell +20, randomCell +30])
          return options.filter(e => e !== randomCell && e !== randomCell+10 && e !== randomCell+20 && e !== randomCell+30)
        } else {
          // console.log("tried")
          return this.setBattleship(options)
        }
      }
    }    
  }

  setCruiserOrSubmarine = (options) => {
    const orrientation = Math.round(Math.random())
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomCell = options[randomIndex]

    if (orrientation === 0){
      if (randomCell % 10 > 8 || randomCell % 10 === 0){
        if (options.filter(e => e === randomCell || e === randomCell -1 || e === randomCell -2).length === 3){
          this.props.addCompShip([randomCell, randomCell -1, randomCell -2])
          return options.filter(e => e !== randomCell && e !== randomCell-1 && e !== randomCell-2)
        } else {
          // console.log("tried")
          return this.setCruiserOrSubmarine(options)
        }
      } else if (randomCell % 10 < 9 && randomCell % 10 !== 0){
        if (options.filter(e => e === randomCell || e === randomCell +1 || e === randomCell +2).length === 3){
          this.props.addCompShip([randomCell, randomCell +1, randomCell +2])
          return options.filter(e => e !== randomCell && e !== randomCell+1 && e !== randomCell+2)
        } else {
          // console.log("tried")
          return this.setCruiserOrSubmarine(options)
        }
      }    
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) > 17){
        if (options.filter(e => e === randomCell || e === randomCell -10 || e === randomCell -20).length === 3){
          this.props.addCompShip([randomCell, randomCell -10, randomCell -20])
          return options.filter(e => e !== randomCell && e !== randomCell-10 && e !== randomCell-20)
        } else {
          // console.log("tried")
          return this.setCruiserOrSubmarine(options)
        }
      } else if (Math.floor(randomCell / 10) < 18){
        if (options.filter(e => e === randomCell || e === randomCell +10 || e === randomCell +20).length === 3){
          this.props.addCompShip([randomCell, randomCell +10, randomCell +20])
          return options.filter(e => e !== randomCell && e !== randomCell+10 && e !== randomCell+20)
        } else {
          // console.log("tried")
          return this.setCruiserOrSubmarine(options)
        }
      }
    }    
  }

  setDestroyer = (options) => {
    const orrientation = Math.round(Math.random())
    const randomIndex = Math.floor(Math.random() * options.length)
    const randomCell = options[randomIndex]

    if (orrientation === 0){
      if (randomCell % 10 !== 1){
        if (options.filter(e => e === randomCell || e === randomCell -1).length === 2){
          this.props.addCompShip([randomCell, randomCell -1])
          return options.filter(e => e !== randomCell && e !== randomCell-1)
        } else {
          // console.log("tried")
          return this.setDestroyer(options)
        }
      } else {
        if (options.filter(e => e === randomCell || e === randomCell +1).length === 2){
          this.props.addCompShip([randomCell, randomCell +1])
          return options.filter(e => e !== randomCell && e !== randomCell+1)
        } else {
          // console.log("tried")
          return this.setDestroyer(options)
        }
      }    
    } else if (orrientation === 1){
      if (Math.floor(randomCell / 10) !== 10){
        if (options.filter(e => e === randomCell || e === randomCell -10).length === 2){
          this.props.addCompShip([randomCell, randomCell -10])
          return options.filter(e => e !== randomCell && e !== randomCell-10)
        } else {
          // console.log("tried")
          return this.setDestroyer(options)
        }
      } else {
        if (options.filter(e => e === randomCell || e === randomCell +10).length === 2){
          this.props.addCompShip([randomCell, randomCell +10])
          return options.filter(e => e !== randomCell && e !== randomCell+10)
        } else {
          // console.log("tried")
          return this.setDestroyer(options)
        }
      }
    }    
  }

  render(){
    return(
      <>
        <Grid board="player"/>
        <Grid board="computer"/>
        <button id="compShipsButton" style={{margin: "15px", padding: "20px", paddingTop: "20px", textAlign: "center"}} onClick={this.handleClick}>Set Opponent's Ships</button>
      </>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCompShip: (positionsArray) => dispatch({type: "ADD_COMP_SHIP", payload: positionsArray})
  }
}

function isGameOver(context){
  if (context.props.compHits.length +1 === 17 ){
    alert("GAME OVER - You Lost")
    context.props.history.push('/welcome')
  } else if (context.props.myHits.length +1 === 17){
    alert("Game Over - YOU WON!")
    context.props.history.push('/welcome')
  }
}

export default connect(null, mapDispatchToProps)(Game)
export {isGameOver}