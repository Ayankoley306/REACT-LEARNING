import { useEffect, useState } from 'react'
import { ToDoContext } from './Context/toDoContext'
import './App.css'
import ToDoItem from './Components/ToDoItem';
import ToDoForm from './Components/ToDoForm';



function App() {
  const [todos, setToDos] = useState([]);

  const addToDo = (todo) => {
    setToDos((prev) => [...prev, { ...todo }]);
  }

  const deleteToDo = (id) => {
    setToDos((prev) => prev.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id, todo) => {
    setToDos(
      (prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    )
  }

  const toggleCompleted = (id) => {
    setToDos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo));
  }


  useEffect(() => {
    const storedToDo = JSON.parse(localStorage.getItem("todos"));
    if (storedToDo && storedToDo.length > 0) {
      setToDos(storedToDo);
    }
    console.log(storedToDo);
  }, [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])



  return (

    <ToDoContext.Provider value={{ todos, addToDo, deleteToDo, updateTodo, toggleCompleted }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <ToDoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoContext.Provider>
  )
}

export default App
