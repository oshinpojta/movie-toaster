import React, { Component } from 'react'
import spinner from "../../assets/gifs/Infinity.gif"
import "./Spinner.css"

export default class Spinner extends Component {
  render() {
    return (
      <div className='spinner'>
        <img src={spinner} alt='Loading...'/>
      </div>
    )
  }
}
