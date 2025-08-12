import { useState } from 'react'
import './App.css'

function App() {
  const [color,setColor]=useState("aqua");
  return(
    <>
      <div className='h-dvh w-dvw flex justify-center' style={{backgroundColor: color}}>
        <div className='h-10 w-lg absolute bottom-7 rounded-2xl flex justify-evenly items-center bg-cyan-600 shadow-cyan-950 shadow-2xl p-1.5'>
          <button className= 'hover:bg-red-500 hover:text-white p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-white hover:border-1 focus:after:bg-red-600'
          onClick={()=>{
            setColor("red");
          }}>RED</button>
          <button className= 'hover:bg-blue-500 p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-1 hover:border-white hover:text-white'
          onClick={()=>{
             setColor("blue");
          }}>BLUE</button>
          <button className= 'hover:bg-yellow-500 p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-1 hover:border-white hover:text-white'
          onClick={()=>{
            setColor("yellow");
          }}>YELLOW</button>
          <button className= 'hover:bg-green-500 p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-1 hover:border-white hover:text-white'
          onClick={()=>{
             setColor("green");
          }}
          >GREEN</button>
          <button className= 'hover:bg-black p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-1 hover:border-white hover:text-white'
          onClick={()=>{
             setColor("black");
          }}
          >BLACK</button>
          <button className= 'hover:bg-white p-1 pr-2 pl-2 rounded-2xl w-18 hover:border-1 hover:border-black'
          onClick={()=>{
             setColor("white");
          }}
          >WHITE</button>
        </div>
      </div>
    </>
  );
}
export default App
