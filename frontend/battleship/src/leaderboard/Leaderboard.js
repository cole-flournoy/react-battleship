import React, {Component} from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import getUsers from '../actions/getUsers'

class Leaderboard extends Component{

  componentDidMount(){
    this.props.getUsers()
  }

  render(){
    document.body.style.backgroundColor = "white"
     return (
      <>
        <h1 style={{position: "relative", left: "90px"}}>BATTLESHIP LEADERBOARD!</h1>
        <Users />
      </>
    )
  }
}

export default connect(null, {getUsers})(Leaderboard)