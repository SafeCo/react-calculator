import React from 'react'
import Button from './button'

const Keypad = ({keyPress}) => {
 
  return (
    <div>
        <ul id='keypad-container' >
            <Button name='clear' symbol='AC' keyPress={keyPress} />
            <Button name='delete' symbol='DEL' keyPress={keyPress} />
            <Button name='operand' symbol='/' keyPress={keyPress} />
            <Button name='operand' symbol='+' keyPress={keyPress} />
            <Button name='operand' symbol='-' keyPress={keyPress} />
            <Button name='operand' symbol='x' keyPress={keyPress} />
            <Button name='number' symbol='7' keyPress={keyPress} />
            <Button name='number' symbol='8' keyPress={keyPress} />
            <Button name='number' symbol='9' keyPress={keyPress} />
            <Button name='number' symbol='4' keyPress={keyPress} />
            <Button name='number' symbol='5' keyPress={keyPress} />
            <Button name='number' symbol='6' keyPress={keyPress} />
            <Button name='number' symbol='1' keyPress={keyPress} />
            <Button name='number' symbol='2' keyPress={keyPress} />
            <Button name='number' symbol='3' keyPress={keyPress} />
            <Button name='dot' symbol='.' keyPress={keyPress} />
            <Button name='number' symbol='0' keyPress={keyPress} />
            <Button name='equals' symbol='=' keyPress={keyPress} />
        </ul>
    </div>
    
  )
}

export default Keypad