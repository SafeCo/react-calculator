import React from 'react'
// import Display from './components/display'
import Keypad from './components/keypad'

const App = () => {
// const data={
//   firstNumber: "",
//   operand:"" ,
//   secondNumber:"", 

// }

const [figure, setFigure] = React.useState({
  firstNumber: "",
  operand:"" ,
  secondNumber:"", 

});


function checkSymbol(e){
  console.log("working")
  console.log(e.target.name)
  setFigure((prev)=>{
    return{
      ...prev,
      firstNumber: prev.firstNumber + e.target.innerHTML
    }    
  })
 
}

  return (
    <div id='container'>
      <div>{figure.firstNumber}</div>
      <Keypad keyPress={checkSymbol} />
    </div>
  )
}

export default App