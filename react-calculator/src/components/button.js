import React from 'react'


const Button = ({name, symbol, buttonPress}) => {
   
  return (
    <li data-name={name} onClick={buttonPress} >{symbol}</li>
  )
}

export default Button