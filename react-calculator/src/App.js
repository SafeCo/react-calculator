import React from 'react'
import Display from './components/display'
import Keypad from './components/keypad'

const App = () => {


const [figure, setFigure] = React.useState("");

function checkSymbol(e){
  setFigure(e.target.innerHTML)
 
}

  return (
    <div id='container'>
      <Display displayFigure={figure}/>
      <Keypad name={checkSymbol} />
    </div>
  )
}

export default App