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
        <Row lett="A" rowNum={0}/>
        <Row lett="B" rowNum={10}/>
        <Row lett="C" rowNum={20}/>
        <Row lett="D" rowNum={30}/>
        <Row lett="E" rowNum={40}/>
        <Row lett="F" rowNum={50}/>
        <Row lett="G" rowNum={60}/>
        <Row lett="H" rowNum={70}/>
        <Row lett="I" rowNum={80}/>
        <Row lett="J" rowNum={90}/>
      </div>
    )
  }


}