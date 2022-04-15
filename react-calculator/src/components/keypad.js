import React from 'react'
import Button from './button'

const Keypad = ({name}) => {
 
  return (
    <div>
        <ul id='keypad-container' >
            <Button symbol='AC' name={name} />
        </ul>
    </div>
    
  )
}

export default Keypad