import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../Features/todoSlice'

function Todoform() {

    const [input,setinput]=useState('');
    const dispatch=useDispatch();

    const addTodoHanler=(e)=>{
        e.preventDefault();
        if(!input)return;

        dispatch(addTodo(input));
        console.log(input);
        setinput("");
    }


  return (
    <form
    onSubmit={addTodoHanler}
    className='space-x-3 mt-12'>
        <input
        type='text'
        className='bg-gary-800 rounded border border -gray focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-color duration-200 ease-in-out'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e)=>setinput(e.target.value)}/>
        {" "}
        <button
        type='submit'
        className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            Add Todo
        </button>

    </form>
  )
}

export default Todoform