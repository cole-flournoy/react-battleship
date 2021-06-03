import React, {Component} from 'react'
import Row from './Row'

export default class Grid extends Component {



  render(){
    const styles = {
      margin: "auto",
      width: "75%",
      paddingTop: "50px"
    }
    return(
      <div style={styles}>
        <Row lett="A" rowNum={this.props.board === "player" ? 0 : 100}/>
        <Row lett="B" rowNum={this.props.board === "player" ? 10 : 110}/>
        <Row lett="C" rowNum={this.props.board === "player" ? 20 : 120}/>
        <Row lett="D" rowNum={this.props.board === "player" ? 30 : 130}/>
        <Row lett="E" rowNum={this.props.board === "player" ? 40 : 140}/>
        <Row lett="F" rowNum={this.props.board === "player" ? 50 : 150}/>
        <Row lett="G" rowNum={this.props.board === "player" ? 60 : 160}/>
        <Row lett="H" rowNum={this.props.board === "player" ? 70 : 170}/>
        <Row lett="I" rowNum={this.props.board === "player" ? 80 : 180}/>
        <Row lett="J" rowNum={this.props.board === "player" ? 90 : 190}/>
      </div>
    )
  }


}