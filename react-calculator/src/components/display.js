import React from 'react'

const Display = ({displayFigure}) => {
  return (
    <div>
      <div>{displayFigure.firstNumber} {displayFigure.operand} {displayFigure.secondNumber}</div>
      <div>{displayFigure.result}</div>
    </div>
    
  )
}

export default Display