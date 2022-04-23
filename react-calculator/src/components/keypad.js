import React from 'react'
import Button from './button'

const Keypad = ({buttonPress}) => {
 
  return (
    <div>
        <ul id='keypad-container' >
            <Button name='clear' symbol='AC' buttonPress={buttonPress} />
            <Button name='delete' symbol='DEL' buttonPress={buttonPress} />
            <Button name='operand' symbol='/' buttonPress={buttonPress} />
            <Button name='operand' symbol='+' buttonPress={buttonPress} />
            <Button name='operand' symbol='-' buttonPress={buttonPress} />
            <Button name='operand' symbol='x' buttonPress={buttonPress} />
            <Button name='number' symbol='7' buttonPress={buttonPress} />
            <Button name='number' symbol='8' buttonPress={buttonPress} />
            <Button name='number' symbol='9' buttonPress={buttonPress} />
            <Button name='number' symbol='4' buttonPress={buttonPress} />
            <Button name='number' symbol='5' buttonPress={buttonPress} />
            <Button name='number' symbol='6' buttonPress={buttonPress} />
            <Button name='number' symbol='1' buttonPress={buttonPress} />
            <Button name='number' symbol='2' buttonPress={buttonPress} />
            <Button name='number' symbol='3' buttonPress={buttonPress} />
            <Button name='dot' symbol='.' buttonPress={buttonPress} />
            <Button name='number' symbol='0' buttonPress={buttonPress} />
            <Button name='equals' symbol='=' buttonPress={buttonPress} />
        </ul>
    </div>
    
  )
}

export default Keypad