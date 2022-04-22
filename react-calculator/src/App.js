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
  currentOperation: "" ,
  previousOperation: "",
});


function checkSymbol(e){
  let symbolType = e.target.getAttribute('data-name')

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
    }else if (opS == false && symbolType== 'dot' && !first.includes('.')){
      return{
        ...prev,
        firstNumber: !first == "" ? first + e.target.innerHTML : "0.",
        firstNumberSwitch: true
      }
    }else if (opS == false && symbolType== 'dot' && first.includes('.')){
      return{
        ...prev,
      }
    }else if (opS == false && symbolType == 'operand' && firstS == false){
      return{
        ...prev,
      }
    }else if (opS == false && symbolType == 'operand'){
      return{
        ...prev,
          firstNumber: first == "0."? "0": first,
          operand: e.target.innerHTML,
          operandState: true
      }
    } else if (opS == true && symbolType == 'number'){
      return{
        ...prev,
          secondNumber: second + e.target.innerHTML,
          secondNumberSwitch:true
      }
    }else if (opS == true && symbolType== 'dot' && !second.includes('.')){
      return{
        ...prev,
        secondNumber: !second == ""? second + e.target.innerHTML : "0.",
        secondNumberSwitch: true
      }
    }else if (opS == true && symbolType== 'dot' && second.includes('.')){
      return{
        ...prev,
      }
    } else if(opS == true && symbolType== 'operand'){
        return{
          ...prev
        }
    }else if(symbolType== 'clear'){
      return{
        firstNumber: "",
        firstNumberSwitch: false,
        operand:"" ,
        operandState: false,
        secondNumber:"", 
        secondNumberSwitch: false,
        result: "0",
      }
  }else if(symbolType== 'delete'){
    if(!second == ""){
      return{
        ...prev,
        secondNumber: second.slice(0, second.length - 1)
      }
    }else if(!op == ""){
      return{
        ...prev,
        operand: "",
        operandState:""
      }
    }else if(!first == ""){
      return{
        ...prev,
        firstNumber: first.slice(0, first.length - 1)
      }
    }else{
      return{
        ...prev
      }
    }
  } else if (firstS == true && opS == true && secondS == true && symbolType == 'equals'){
    
      let num1 = parseFloat(first) 
      let num2 =  second == "0."? 0 : parseFloat(second)
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
     <div id='calculator'>
      <Display displayFigure={figure} />
      <Keypad keyPress={checkSymbol} />
     </div>
    </div>
  )
}

export default App