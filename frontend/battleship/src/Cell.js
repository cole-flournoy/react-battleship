import React, {Component} from 'react'
import {connect} from 'react-redux'


class Cell extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cellColor: "lightblue",
      clicked: false,
      position: props.position
    }
  }
  
  handleClick = () => {
    if (this.state.cellColor === "lightblue"){
      this.setState({cellColor: "lightgrey", clicked: true})
      this.props.addMyShip(this.props.position)
    } else if (this.state.cellColor === "lightgrey"){
      this.setState({cellColor: "lightblue", clicked: false})
      this.props.removeMyShip(this.props.position)
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

    // console.log(this.props.lett, this.props.num, this.state.clicked)
    return <div onClick={this.handleClick} style={styles}>{this.props.lett} {this.state.position} </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMyShip: (position) => dispatch({type: "ADD_MYSHIP", payload: position}),
    removeMyShip: (position) => dispatch({type: "REMOVE_MYSHIP", payload: position})
  }
}

export default connect(null, mapDispatchToProps)(Cell)