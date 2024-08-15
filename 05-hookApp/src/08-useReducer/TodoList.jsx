import React from 'react'

export const TodoList = ( { todos } ) => {
  return (
    <>
        <ul className='list-group'>
            {
                todos.map( todo => (
                    <li key={ todo.id } className='list-group-item d-flex justify-content-between'>
                        <span className='aling-self-center'>Item 1</span>
                        <button className='btn btn-danger'>Borrar</button>
                    </li> 
                ) )
            }
                    
        </ul>
    </>
  )
}
