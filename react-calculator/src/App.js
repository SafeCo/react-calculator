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
  result:""

});

// if(operandState == false && symbolType == 'number'){
//   return{
//     ...prev,
//       firstNumber: prev.firstNumber + e.target.innerHTML,
//       firstNumberSwitch: true
//   }
// }else if (operandState == false && symbolType == 'operand'){
//   return{
//     ...prev,
//       operand: e.target.innerHTML,
//       operandState: true
//   }
// } else if (operandState == true && symbolType == 'number'){
//   return{
//     ...prev,
//       secondNumber: e.target.innerHTML,
//       secondNumberSwitch:true
//   }
// } else if (firstNumberSwitch == true && operandState == true && secondNumberSwitch== true && symbolType == 'equals'){
//   console.log(working)
//   return{
//     ...prev,
//     firstNumberSwitch: true,
//     operandState: true,
//     secondNumberSwitch:true,
//   }
// }


function checkSymbol(e){
  let symbolType = e.target.getAttribute('data-name')
  console.log(symbolType)
  setFigure((prev)=>{
    let first = prev.firstNumber
    let second = prev.secondNumber
    let firstS = prev.firstNumberSwitch
    let secondS = prev.secondNumberSwitch
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
    } else if (firstS == true && opS == true && secondS == true && symbolType == 'equals'){
      console.log("working")
      return{
        ...prev,
        firstNumberSwitch: true,
        operandState: true,
        secondNumberSwitch:true,
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