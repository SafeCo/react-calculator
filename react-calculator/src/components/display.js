import React from 'react'

const Display = ({displayFigure}) => {
  return (
    <div>{displayFigure.firstNumber} {displayFigure.operand} {displayFigure.secondNumber}</div>
  )
}

export default Display