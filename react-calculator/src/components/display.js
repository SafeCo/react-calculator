import React from 'react'

const Display = ({displayFigure}) => {
  console.log("display component:"+ displayFigure.firstNumber)
  return (
    <div>
      <div>{displayFigure.firstNumber} {displayFigure.operand} {displayFigure.secondNumber}</div>
      <div>{displayFigure.result}</div>
    </div>
    
  )
}

export default Display