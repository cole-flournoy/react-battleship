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
        <Row lett="A"/>
        <Row lett="B"/>
        <Row lett="C"/>
        <Row lett="D"/>
        <Row lett="E"/>
        <Row lett="F"/>
        <Row lett="G"/>
        <Row lett="H"/>
        <Row lett="I"/>
        <Row lett="J"/>
      </div>
    )
  }


}