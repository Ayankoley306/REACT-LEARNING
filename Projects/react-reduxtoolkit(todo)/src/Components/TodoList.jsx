import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {removeTodo} from'../Features/todoSlice'

function TodoList() {

    const todos = useSelector(state=>state.todos)
const dispatch=useDispatch();

  return (
    <div>
        <h3>TodoList</h3>
        {todos.map((todo)=>(
            <li key={todo.id}>
                {todo.text}
                <button
                onClick={()=> dispatch(removeTodo(todo.id))}
                className=''>
                    x

                </button>
            </li>
        ))}
    </div>    
  )
}

export default TodoList