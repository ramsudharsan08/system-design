import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([]);

  const AddTodo = () => {
    const item = {
      id: input.length+1,
      text: input
    }
    setTodoList(prev => [...prev, item])
    setInput('')
  }

  const DeleteTodo = (id) => {
    setTodoList(todoList.filter(t => t.id !== id))
  }

  return (
    <>
      <input type='text' placeholder='Enter Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
      <button onClick={() => AddTodo()}>Add</button>
      <ul>
        {todoList.map(t => <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={() => DeleteTodo(t.id)}>Delete</button>
        </li>
        )}
      </ul>
    </>
  )
}

export default App
