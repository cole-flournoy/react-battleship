import React, {Component} from 'react'
import {connect} from 'react-redux'
import getUsers from './actions/getUsers'

class Leaderboard extends Component{

  componentDidMount(){
    this.props.getUsers()
  }

  render(){
     return (
      <>
        <h1>YOU'RE ON THE LEADERBOARD PAGE!</h1>
        
      </>
    )
  }
}

export default connect(null, {getUsers})(Leaderboard)