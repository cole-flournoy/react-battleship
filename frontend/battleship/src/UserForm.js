import React, {Component} from 'react'
import {connect} from 'react-redux'
import setUser from './actions/setUser'

class UserForm extends Component{
  constructor(props){
    super(props)
    this.state = {
      username: ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.username.length !== 0){
      this.props.setUser(this.state.username)
      
      debugger
    }
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


export default connect(null, {setUser})(UserForm)