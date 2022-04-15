import React from 'react'


const Button = ({name, symbol, keyPress}) => {
   
  return (
    <li name={name} onClick={keyPress} >{symbol}</li>
  )
}

export default Button