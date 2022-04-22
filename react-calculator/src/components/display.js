import React from 'react'

const Display = ({displayFigure}) => {
  return (
    <div id='display' >
      <div>{displayFigure.previousOperation}</div>
      <div>{displayFigure.currentOperation}</div>
    </div>
    
  )
}

export default Display