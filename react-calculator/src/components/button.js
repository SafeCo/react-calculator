import React from 'react'


const Button = ({name, symbol, keyPress}) => {
   
  return (
    <li data-name={name} onClick={keyPress} >{symbol}</li>
  )
}

export default Button