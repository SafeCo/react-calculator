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
    let cO = prev.currentOperation
    let pO = prev.previousOperation

    if(symbolType == 'operand' && prev.result.includes('') == false ){
      console.log("working")
      return{
        ...prev,
        firstNumberSwitch: true,
        operand: e.target.innerHTML,
        operandState: true,
        previousOperation: prev.result + e.target.innerHTML,
        currentOperation:"",
        result: ""
      }

    }else if(opS == false && symbolType == 'number'){
      return{
        ...prev,
          firstNumber: first + e.target.innerHTML,
          firstNumberSwitch: true,
          currentOperation: first + e.target.innerHTML
      }
    }else if (opS == false && symbolType== 'dot' && !first.includes('.')){
      return{
        ...prev,
        firstNumber: !first == "" ? first + e.target.innerHTML : "0.",
        firstNumberSwitch: true,
        currentOperation: !first == "" ? first + e.target.innerHTML : "0."
      }
    }else if (opS == false && symbolType== 'dot' && first.includes('.')){
      return{
        ...prev,
      }
    }else if (opS == false && symbolType == 'operand' && firstS == false){
      console.log("operand block")
      return{
        ...prev,
      }
    }else if (opS == false && symbolType == 'operand'){
      return{
        ...prev,
          firstNumber: first == "0."? "0": first,
          operand: e.target.innerHTML,
          operandState: true,
          previousOperation: cO + e.target.innerHTML,
          currentOperation: ""

      }
    } else if (opS == true && symbolType == 'number'){
      return{
        ...prev,
          secondNumber: second + e.target.innerHTML,
          secondNumberSwitch:true,
          currentOperation: second + e.target.innerHTML
      }
    }else if (opS == true && symbolType== 'dot' && !second.includes('.')){
      return{
        ...prev,
        secondNumber: !second == ""? second + e.target.innerHTML : "0.",
        secondNumberSwitch: true,
        currentOperation: !second == ""? second + e.target.innerHTML : "0."
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
        previousOperation: "",
        currentOperation: ""
      }
  }else if(symbolType== 'delete'){
    if(!second == ""){
      return{
        ...prev,
        secondNumber: second.slice(0, second.length - 1),
        currentOperation:second.slice(0, second.length - 1)
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
        firstNumber: first.slice(0, first.length - 1),
        currentOperation: first.slice(0, first.length - 1)
        }
      }
    } else if(firstS == false || opS == false || secondS == false && symbolType == 'equals'){
    console.log("equal block")
    return{
      ...prev
    }
  }else if (firstS == true && opS == true && secondS == true && symbolType == 'equals'){
    
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
        result: toString(evaluate),
        currentOperation: evaluate
      }
    }
  })
 
}


  return (
    <div id='container'>
     <div id='calculator'>
      <h1>Calculator</h1>
      <Display displayFigure={figure} />
      <Keypad keyPress={checkSymbol} />
     </div>
    </div>
  )
}

export default App