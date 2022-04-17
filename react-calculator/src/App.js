import React from 'react'
import Display from './components/display'
import Keypad from './components/keypad'

const App = () => {
const [figure, setFigure] = React.useState({
  firstNumber: "",
  firstNumberSwitch: false,
  operand:"" ,
  operandState: false,
  secondNumber:"", 
  secondNumberSwitch: false,
  result:"0",
  currentOperation: "",
  previousOperation: "",

});


function checkSymbol(e){
  let symbolType = e.target.getAttribute('data-name')
  console.log(symbolType)
  setFigure((prev)=>{
    let first = prev.firstNumber
    let second = prev.secondNumber
    let firstS = prev.firstNumberSwitch
    let secondS = prev.secondNumberSwitch
    let op = prev.operand
    let opS = prev.operandState


    if(opS == false && symbolType == 'number'){
      return{
        ...prev,
          firstNumber: first + e.target.innerHTML,
          firstNumberSwitch: true
      }
    }else if (opS == false && symbolType == 'operand'){
      return{
        ...prev,
          operand: e.target.innerHTML,
          operandState: true
      }
    } else if (opS == true && symbolType == 'number'){
      return{
        ...prev,
          secondNumber: second + e.target.innerHTML,
          secondNumberSwitch:true
      }
    } else if(opS == true && symbolType== 'operand'){
        return{
          ...prev
        }
    } else if (firstS == true && opS == true && secondS == true && symbolType == 'equals'){
      let num1 = parseFloat(first) 
      let num2= parseFloat(second)
      let evaluate = sum()
      function sum (){
        if(op == '+'){
          return num1 + num2
        }else if(op == '-'){
          return num1 - num2
        }else if( op == 'x'){
          return num1 * num2
        }else if(op == '/'){
          return num1 / num2
        }
      }
      return{
        firstNumber: "",
        firstNumberSwitch: false,
        operand:"" ,
        operandState: false,
        secondNumber:"", 
        secondNumberSwitch: false,
        result: evaluate,
      }
    }
  })
 
}

  return (
    <div id='container'>
      <Display displayFigure={figure} />
      <Keypad keyPress={checkSymbol} />
    </div>
  )
}

export default App