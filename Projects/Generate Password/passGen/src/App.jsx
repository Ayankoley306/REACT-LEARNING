import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [number, SetNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "0123456789";
    if (char) str += "!@#$%^&*";

    for (let i = 1; i <= length; i++) {
      let picChar = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(picChar);
    }
    setPassword(pass);

  }, [length, number, char, setPassword]);

  const copy = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 8);
    window.navigator.clipboard.writeText(Password)
  }, [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, number, char, passwordGenerator])
  return (
    <div className='w-full h-fit max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-white bg-gray-700 py-1'>
      <h1>PassWord Generator</h1>
      <div className='flex shadow rounded-lg ocerflow-hidden mb-4 items-center'>
        <input
          type="text"
          value={Password}
          placeholder='Password'
          className='bg-white rounded-s-2xl text-center text-black placeholder:text-black my-1 w-10/12 h-8'
          readOnly
          ref={passwordRef} />
        <button
          className=' px-2 rounded-e-2xl bg-blue-400 h-8 active:bg-white active:text-blue-400 border-2 border-blue-400'
          onClick={copy}
        >COPY</button>
      </div>
      <div className='flex justify-between'>
        <div className='flex items-center justify-evenly'>
          <input
            type='range'
            min={0}
            max={20}
            value={length}
            className='bg-blue-400'
            onChange={(e) => { setLength(e.target.value) }}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            defaultChecked={char}
            onClick={() => {
              setChar((prevchar) => !prevchar)
            }}
            className='mx-2'
          />
          <label>Charactar</label>
        </div>
        <div className='flex items-center'>
          <input
            type='checkbox'
            defaultChecked={number}
            onClick={() => {
              SetNumber((prevnum) => !prevnum)
            }}
            className='mx-2'
          />
          <label>Number</label>
        </div>
      </div>
    </div>
  )
}
export default App
