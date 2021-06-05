import React, {Component} from 'react'
import {connect} from 'react-redux'
import {isGameOver} from './Game'


class Cell extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cellColor: this.setColor(),
      clicked: false,
      position: props.position
    }
  }
  
  handleClick = () => {
    if (this.state.position < 101){
      if (this.props.myShips.length === 17){

      } else {
        if (this.state.cellColor === "lightblue"){
          if (this.props.myShips.length < 17){
            this.setState({cellColor: "lightgrey", clicked: true})
            this.props.addMyShip(this.props.position)
          }
        } else if (this.state.cellColor === "lightgrey"){
          this.setState({cellColor: "lightblue", clicked: false})
          this.props.removeMyShip(this.props.position)
        }
      }
    } else {
      if (this.props.compShips && this.props.compShips.find(p => p === this.props.position)){
        this.setState({cellColor: "red"})
        this.props.addMyHit(this.props.position)
        isGameOver(this)
        this.computerGuess()
      } else {
        this.setState({cellColor: "white"})
        this.computerGuess()
      }
    }
  } 

  // isGameOver = () => {
  //   if (this.props.compHits.length +1 === 17 ){
  //     alert("GAME OVER - You Lost")
  //   } else if (this.props.myHits.length +1 === 17){
  //     alert("Game Over - YOU WON!")
  //   }
  //     // prevent further clicks
  //     // or redirect away after message
  // }

  computerGuess = () => {
    const options = this.props.compCanGuess
    const randomIndex = Math.floor(Math.random() * options.length)
    const guess = options[randomIndex]
    const cell = document.getElementById(`${guess}`)
    this.props.addGuess(guess) 
    if (this.props.myShips.find(e => e === guess)){
      cell.style.backgroundColor = "red"
      this.props.addCompHit(guess) 
      isGameOver(this)
    } else {
      cell.style.backgroundColor = "white"
    }
  }

  setColor = () => {
    if (this.props.position > 100){
      return "lightgreen"
    } else {
      return "lightblue"
    }
  }
  
  render() {

    const styles = {
      backgroundColor: this.state.cellColor,
      display: "inline-block",
      border: "solid",
      width: "50px",
      height: "50px"
    }

    return <div id={this.state.position} onClick={this.handleClick} style={styles}>{this.props.lett} {this.state.position} </div>
  }
}

function mapStateToprops(state){
  return {
    myShips: state.myShips,
    compShips: state.compShips,
    compCanGuess: state.compCanGuess,
    compHasGuessed: state.compHasGuessed,
    myHits: state.myHits,
    compHits: state.compHits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMyShip: (position) => dispatch({type: "ADD_MYSHIP", payload: position}),
    removeMyShip: (position) => dispatch({type: "REMOVE_MYSHIP", payload: position}),
    addGuess: (guess) => dispatch({type: "ADD_GUESS", payload: guess}),
    addMyHit: (position) => dispatch({type: "ADD_MY_HIT", payload: position}),
    addCompHit: (position) => dispatch({type: "ADD_COMP_HIT", payload: position})
  }
}

export default connect(mapStateToprops, mapDispatchToProps)(Cell)