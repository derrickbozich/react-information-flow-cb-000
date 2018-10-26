import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'



export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color)
    })
  }

  handleClick = (e) => {
    e.stopPropagation()
    let newColor = getRandomColor()
    this.setState({
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?

    let p = this.props

    return (
      <div onClick={this.handleClick } className="tier2" style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={e => this.handleChildClick(e)} />
        <Tier3 color={this.state.childColor} handleChildClick={e => this.handleChildClick(e)} />
      </div>
    )
  }
}
