import React, {Component} from 'react'
import { connect } from 'react-redux'

export default class UserForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // look up user or add new
    // find_or_create_by?
    // redirect to play game

  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={this.state.username} name="username"/>
        <input id="playButton" type="submit" value="PLAY"/>
      </form>
    )
  }

}

// function mapStateToprops(state){
//   return {
//     currentUser: state.currentUser
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addCurrentUser: (username) => dispatch({type: "ADD_CURRENT_USER", payload: username}),
//   }
// }

// export default connect(mapStateToprops, mapDispatchToProps)(UserForm)