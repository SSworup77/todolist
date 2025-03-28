import { useState } from "react"

export default function TodoInput(props){
    const {handleAddTodos,todoValue,setTodosValue}=props
    return(
        <header className="header">
            <input value={todoValue}  onChange={(e)=>{
                setTodosValue(e.target.value)   
            }} placeholder="Enter todo...."/>
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodosValue('')
                }}>Add</button>
        </header>
    )
}