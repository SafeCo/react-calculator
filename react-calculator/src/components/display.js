import React from 'react'

const Display = ({displayFigure}) => {
  return (
    <div id='display' >
      <div>{displayFigure.firstNumber} {displayFigure.operand} {displayFigure.secondNumber}</div>
      <div>{displayFigure.result}</div>
    </div>
    
  )
}

export default Display