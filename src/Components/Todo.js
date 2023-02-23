import React from 'react'
import { useState } from 'react'

const Todo = (todo) => {
    const [edit, setEdit] = useState(false)
  return <>
  <div className='todo'> 
    {edit ? (
     <div>Edit mode</div> 
    ): (
    <div>
        {todo.title}
        <button onClick={()=> setEdit(true)}>Edit</button>
        <button>Delete</button>
    </div>   
    )}
   
  </div>
   
  </>
   
}

export default Todo