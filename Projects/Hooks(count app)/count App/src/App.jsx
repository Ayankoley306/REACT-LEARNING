import { useState } from 'react'
import './App.css'

function App() {
  const [value,setValue]=useState(0);
  function addValue(){
    if(value<20){
    setValue(value+1);
    }
  }
  function lessValue(){
    if(value>0){
      setValue(value-1);
    }
  }
  return (
      <>
      <h1>Counter App</h1>
      <h4>Counter value : {value}</h4>
      <button 
      onClick={addValue}
      >UP /\</button>
      <button
      onClick={lessValue}
      >Down \/</button>
    </>
  )
}

export default App
