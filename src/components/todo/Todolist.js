import React, { useContext, useEffect } from "react";
import AppContext from "../context/context";

//comps
import TodoForm from './TodoForm'

export default function Todolist(props) {
    const { state, dispatch } = useContext(AppContext);
    // console.log(state, ' state')
    const { todos } = state
    // console.log(props, ' props')
    useEffect(() => {
        window.scrollTo(0,0)
    })
    return (
        <div style={{ marginTop: '30px'}}>
            <TodoForm />
            <h1>{ state.todos.length ? `${state.todos.length} items `: 'No ITEMS'}</h1>
            {
                todos.map(i => {
                    return (
                        <li key={ i.id }>
                            <span style={{ color: i.completed ? 'red': 'green' }} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: i })}>{ i.text }</span>
                            <button style={{ margin: '10px' }} onClick={ () => dispatch({ type: 'DELETE', payload: i.id })}>DELETE</button>
                            <button onClick={ () => dispatch({ type: 'SET_CURRENT_TODO', payload: i})}>EDIT</button>
                        </li>
                    )
                })
            }          
          
        </div>
    )
}

