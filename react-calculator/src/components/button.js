import React from 'react'


const Button = ({symbol, name}) => {
   
  return (
    <div onClick={name}>{symbol}</div>
  )
}

export default Button