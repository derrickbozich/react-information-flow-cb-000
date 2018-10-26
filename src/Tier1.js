import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor() {
    super()
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  updateColor = () => {
    let newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      // <div onClick={() => {this.setState({color: this.state.color })}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
      <div onClick={() => this.updateColor()} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor}   />
        <Tier2 color={this.state.childColor}  />
      </div>
    )
  }
}
