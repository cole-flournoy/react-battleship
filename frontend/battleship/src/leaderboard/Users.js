import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class Users extends Component{

  render(){
    return (
      <ul>
        {this.props.usersArray.map(user => <li key={user.id}><Link to={`/users/${user.id}/games`}>{user.username}</Link></li>)}
      </ul>
    )
  }

}

function mapStateToProps(state){
  return {usersArray: state.usersArray}
}

export default connect(mapStateToProps)(Users)