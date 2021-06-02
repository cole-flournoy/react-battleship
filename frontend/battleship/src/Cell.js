import React, {Component} from 'react'


export default class Cell extends Component {
  
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
    } else if (this.state.cellColor === "lightgrey"){
      this.setState({cellColor: "lightblue", clicked: false})
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