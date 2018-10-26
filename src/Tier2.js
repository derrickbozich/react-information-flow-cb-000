import React, { Component } from 'react'
import { getReducedColor } from './randomColorGenerator.js'
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
      childColor: getReducedColor(nextProps.color)
    })
  }

  handleChildClick = event => {
    event.stopPropagation()
    console.log("3")
  }

  render() {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?

    let p = this.props

    return (
      <div onClick={(e) => this.props.handleChildClick(e)} className="tier2" style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 color={this.state.childColor} handleChildClick={e => this.handleChildClick(e)} />
        <Tier3 color={this.state.childColor} />
      </div>
    )
  }
}
