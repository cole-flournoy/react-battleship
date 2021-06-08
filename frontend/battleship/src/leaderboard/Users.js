import React, {Component} from 'react'
import {connect} from 'react-redux'

class Users extends Component{

  render(){  
    const users = this.props.usersArray.sort((userA, userB) => {
      if (userA.wins === userB.wins){
        return userA.losses - userB.losses
      } else {
        return userB.wins - userA.wins
      } 
    })

    const styles = {backgroundColor: "black", color: "white"}
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Wins</th>
            <th>Losses</th>
            <th>Best Guess Efficiency</th>
            <th>Average Guess Efficiency</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (<tr key={user.id} style={user.id === this.props.currentUser.id ? styles : null}>
              <td>{user.username}</td>
              <td>{user.wins}</td>
              <td>{user.losses}</td>
              <td>{user.bestEfficiency === null ? "--" : `${user.bestEfficiency}%`}</td>
              <td>{user.avgEfficiency === null ? "--" : `${user.avgEfficiency}%`}</td>
            </tr>)
          })}
        </tbody>
      </table>
    )
  }

}

function mapStateToProps(state){
  return {
    usersArray: state.usersArray,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Users)