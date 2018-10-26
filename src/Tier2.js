import React, { Component } from 'react'
import {  getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      color: nextProps.color
    })
  }

  handleClick = () => {

    this.setState({
      color: getRandomColor()
    })
  }





  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={console.log('2')} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={"#0F0"} />
        <Tier3 color={"#F00"} />
      </div>
    )
  }
}
