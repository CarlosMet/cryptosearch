import React from 'react'
import { useState } from 'react'
import Todo from './Todo'

const TodoApp = () => { 
  const [title, setTitle] = useState("hola")  
  const [todos, setTodos] = useState([])

  const handleSubmit = (e)=>{
    e.preventDefault();
    const newTodo = {
        id:crypto.randomUUID(),
        title: title,
        completed: false
    }
    setTodos([...todos, newTodo])
  }

  return (
    <div>
        <form onSubmit={handleSubmit} className='todoCreateForm'>
            <input 
            onChange={(e)=>{
                const value = e.target.value
                setTitle(value)
            }}
            className='todoInput' />
            <input 
            onClick={handleSubmit}                 
            type="submit" value="create task" className='buttonCreate' />            
        </form>
        <div className='todoContainer'>
            {todos.map(todo =>(
                 <Todo key={todo.id} title ={todo.title} />
                )
            )}
        </div>
    </div>
  )
}

export default TodoApp