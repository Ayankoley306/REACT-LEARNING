import { useState } from 'react'
import './App.css'
import { ToDoContext } from './Context/toDoContext'

function App() {
  const [toDos, setToDos] = useState([]);
  const addToDo = (toDo) => {
    setToDos((prevToDo) => [...prevToDo, {
      id: crypto.randomUUID(), ...toDo
    }
    ])

  }

  const deleteToDo = (id) => { }




  return (
    <ToDoContext.Provider value={{ toDos, addToDo, deleteToDo, updateToDo, toggleCompleateToDo }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add ToDoItem here */}
          </div>
        </div>
      </div>
    </ToDoContext.Provider>
  )
}

export default App
