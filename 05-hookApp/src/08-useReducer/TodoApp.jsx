import React, { useReducer } from 'react'
import { todoReducer } from './rodoReducer'
import { TodoList } from './TodoList'

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la pidra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la pidra del tiempo',
        done: false,
    },
]

export const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, initialState )
  return (
    <>
        <h1>TodoApp (10), <small>pendientes: 2</small></h1>
        <hr />

        <div className='row'>
            <div className='col-7'>
                <TodoList />
            </div>

            <div className='col-5'>
                <h4>Agregar TODO</h4>
                <hr />
                <form >
                    <input 
                        type="text"
                        placeholder='Qué hay que hacer?'
                        className='form-control'
                    />
                    <button 
                        type='submit'
                        className='btn btn-outline-primary mt-1'
                    >
                        Agregar
                    </button>
                </form>
            </div>
        </div>

        
    </>
  )
}
