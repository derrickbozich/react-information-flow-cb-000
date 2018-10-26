import React from 'react'
import { getRandomColor } from './randomColorGenerator.js'


const Tier3 = (props) => (
  let color = props.color

  // this component does not need to change (but feel free to change however you like!)
  <div className="tier3" onClick={color = getRandomColor()} style={{backgroundColor: color, color: color}}></div>
)

export default Tier3
