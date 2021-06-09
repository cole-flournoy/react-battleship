import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class Cell extends Component {
  
  constructor(props) {
    super(props)
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
      if (this.props.compShips.length !== 0 && this.props.myShips.length === 17){
        if (this.props.iHaveGuessed.filter(p => p === this.props.position).length === 0){
          let guessBox = document.getElementById("myGuessContainer")
          if (this.props.compShips.find(p => p === this.props.position)){
            this.setState({cellColor: "red"})
            this.props.addMyHit(this.props.position)
            guessBox.innerText = "HIT"
            guessBox.style.display = "block"
            setTimeout(() => {
              guessBox.innerText = ""
              guessBox.style.display = "none"
              this.isGameOver()
              this.computerGuess()
            }, 1000)

          } else {
            this.setState({cellColor: "white"})
            guessBox.innerText = "MISS"
            guessBox.style.display = "block"
            setTimeout(() => {
              guessBox.innerText = ""
              guessBox.style.display = "none"
              this.computerGuess()
            }, 1000)
          }
          this.props.addMyGuess(this.props.position)
        }
      }
    }
  } 

  addGame = (game) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({game})
    }
    
    fetch("http://localhost:3001/games", options)
    .then(resp => {
      if (resp.ok){
        return resp.json()
      } else {
        throw new Error(resp)
      }
    })
    .catch(error => alert(error))
  }

  isGameOver = () => {
    if (this.props.compHits.length +1 === 17 || this.props.myHits.length +1 === 17){
      let div = document.getElementById("gameOverContainer")
      if (this.props.compHits.length +1 === 17){
        let game = {
          win: false, 
          accuracy: (this.props.compHits.length / this.props.compHasGuessed.length)*100,
          user_id: this.props.currentUser.id || null
        } 
        if (game.user_id !== null){this.addGame(game)}
        document.body.style.backgroundColor = "orangered"
        div.style.display = ""
        div.innerText = "GAME OVER \n You Lost"

      } else if (this.props.myHits.length +1 === 17){
        let game = {
          win: true, 
          accuracy: (this.props.myHits.length / this.props.iHaveGuessed.length)*100,
          user_id: this.props.currentUser.id || null
        }
        if (game.user_id !== null){this.addGame(game)}
        document.body.style.backgroundColor = "green"
        div.style.display = ""
        div.innerText = "GAME OVER \n You WON!"
      }
      setTimeout(() => this.props.history.push('/leaderboard'), 4000)
    }
  }

  computerGuess = () => {
    const options = this.props.compCanGuess
    const randomIndex = Math.floor(Math.random() * options.length)
    const guess = options[randomIndex]
    const cell = document.getElementById(`${guess}`)
    this.props.addGuess(guess) 
    if (this.props.myShips.find(e => e === guess)){
      cell.style.backgroundColor = "red"
      this.props.addCompHit(guess) 
      
      this.isGameOver()
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

    return <div id={this.state.position} onClick={this.handleClick} style={styles}>{this.props.lett}{this.props.num}</div>
  }
}

function mapStateToProps(state){
  return {
    myShips: state.myShips,
    compShips: state.compShips,
    compCanGuess: state.compCanGuess,
    compHasGuessed: state.compHasGuessed,
    iHaveGuessed: state.iHaveGuessed,
    myHits: state.myHits,
    compHits: state.compHits,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMyShip: (position) => dispatch({type: "ADD_MYSHIP", payload: position}),
    removeMyShip: (position) => dispatch({type: "REMOVE_MYSHIP", payload: position}),
    addGuess: (guess) => dispatch({type: "ADD_GUESS", payload: guess}),
    addMyGuess: (guess) => dispatch({type: "ADD_MY_GUESS", payload: guess}),
    addMyHit: (position) => dispatch({type: "ADD_MY_HIT", payload: position}),
    addCompHit: (position) => dispatch({type: "ADD_COMP_HIT", payload: position})
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cell))
