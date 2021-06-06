import React, {Component} from 'react'
import {connect} from 'react-redux'
import Users from './Users'
import getUsers from '../actions/getUsers'

class Leaderboard extends Component{

  componentDidMount(){
    this.props.getUsers()
  }

  render(){
     return (
      <>
        <h1>BATTLESHIP LEADERBOARD!</h1>
        <Users />
      </>
    )
  }
}

export default connect(null, {getUsers})(Leaderboard)