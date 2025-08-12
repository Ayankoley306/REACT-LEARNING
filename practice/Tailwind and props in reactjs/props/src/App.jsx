import { Component, useState } from 'react'
import './App.css'
import Card from './Components/Card'


function App() {
  const [data,setData]=useState([{
    name:'Ayan Koley',
    
  }])
  return (
    <>
      <Card name="Ayan koley"/>
      <Card name={"Rinu koley"}/>
    </>
  )
}

export default App
