import React, {Component} from 'react'


export default class Cell extends Component {

  render(){
    const styles = {
      backgroundColor: "lightblue",
      display: "inline-block",
      border: "solid",
      width: "50px",
      height: "50px"
    }
    return <div style={styles}>{this.props.lett}{this.props.num}</div>
  }

}