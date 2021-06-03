import React, {Component} from 'react'
import Grid from './Grid'

export default class Game extends Component {

  render(){
    return(
      <>
        <Grid board="player"/>
        <Grid board="computer"/>
      </>
    )
  }
}