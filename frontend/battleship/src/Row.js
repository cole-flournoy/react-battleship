import React, {Component} from 'react'
import Cell from './Cell'


export default class Row extends Component {

  render(){
    const styles = {
      width: "560px"
    }
    return(
      <div style={styles}>
        <Cell lett={this.props.lett} num={1}/>
        <Cell lett={this.props.lett} num={2}/>
        <Cell lett={this.props.lett} num={3}/>
        <Cell lett={this.props.lett} num={4}/>
        <Cell lett={this.props.lett} num={5}/>
        <Cell lett={this.props.lett} num={6}/>
        <Cell lett={this.props.lett} num={7}/>
        <Cell lett={this.props.lett} num={8}/>
        <Cell lett={this.props.lett} num={9}/>
        <Cell lett={this.props.lett} num={10}/>
      </div>
    )
  }

}