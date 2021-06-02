import React, {Component} from 'react'
import Cell from './Cell'


export default class Row extends Component {

  render(){
    const styles = {
      width: "560px"
    }
    return(
      <div style={styles}>
        <Cell lett={this.props.lett} num={1} position={this.props.rowNum + 1}/>
        <Cell lett={this.props.lett} num={2} position={this.props.rowNum + 2}/>
        <Cell lett={this.props.lett} num={3} position={this.props.rowNum + 3}/>
        <Cell lett={this.props.lett} num={4} position={this.props.rowNum + 4}/>
        <Cell lett={this.props.lett} num={5} position={this.props.rowNum + 5}/>
        <Cell lett={this.props.lett} num={6} position={this.props.rowNum + 6}/>
        <Cell lett={this.props.lett} num={7} position={this.props.rowNum + 7}/>
        <Cell lett={this.props.lett} num={8} position={this.props.rowNum + 8}/>
        <Cell lett={this.props.lett} num={9} position={this.props.rowNum + 9}/>
        <Cell lett={this.props.lett} num={10} position={this.props.rowNum + 10}/>
      </div>
    )
  }

}