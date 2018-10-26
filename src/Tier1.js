import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier2 from './Tier2'


export default class Tier1 extends Component {

  constructor(props) {
    super(props)
    const initialColor = getRandomColor()
    this.state = {
      color: initialColor,
      childColor: getReducedColor(initialColor)
    }
  }

  // componentWillReceiveProps(){
  //   let oldColor = this.state.color
  //   let newColor = getRandomColor()
  //   this.setState({
  //     color: newColor,
  //     childColor: getReducedColor(newColor)
  //   })
  // }

  updateColors = () => {
    let oldColor = this.state.color
    let newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  handleChildClick = event => {
    event.stopPropagation()
    console.log("2")
  }
  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      // <div onClick={() => {this.setState({color: this.state.color })}} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
      <div onClick={() => this.updateColors()} className="tier1" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 color={this.state.childColor} handleChildClick={e => this.handleChildClick(e)}  />
        <Tier2 color={this.state.childColor} />
      </div>
    )
  }
}
