import React, { useContext, useState, useEffect } from "react";
import AppContext from "../context/context";

export default function TodoForm() {
    const { state, dispatch } = useContext(AppContext);
    const { currentTodo } = state
    // console.log(currentTodo, ' editing')
    const [ text, setText ] = useState('')
    // console.log(state, ' state')

    useEffect(() => {
        if(currentTodo.text){
            setText(currentTodo.text)
        }
    }, [currentTodo.id])
    
/////////////////////////////
    const handleChange = e => {
        setText(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(currentTodo.text){
            dispatch({ type: 'UPDATE_TODO', payload: text })
        }else{
            dispatch({ type: 'ADD_TODO', payload: text })
        }
        setText('')
        
    }
    console.log(text, ' text')
    console.log(state, ' state')
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <input autoFocus type="text" value={ text } placeholder="Text" onChange={ handleChange }/>
                <button type="submit">SUBMIT</button>
            </form>
            <hr />
        </div>
    )
}

