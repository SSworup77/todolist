import { useState,useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import ThemeToggle from "./components/ThemeToggle"


function App() {
  const [todos,setTodos]=useState([
  ])
  const [todoValue,setTodosValue]=useState('')

  function persistData(newList){
    localStorage.setItem('todos',JSON.stringify({todos:
      newList
    }))
  }
  function handleAddTodos(newTodos){
    if(!newTodos || newTodos.stringify===""){
      return;
    }
    const newTodoList=[...todos,newTodos]
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleDeleteTodos(index){
    const newTodoList=todos.filter((todos,todoIndex)=>{
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  function handleEditTodos(index){
    const valueToBeEdited=todos[index]
    setTodosValue(valueToBeEdited)
    handleDeleteTodos(index)
  }

  useEffect(()=>{
    if(!localStorage){
      return
    }
    let localTodos=localStorage.getItem('todos')
    if(!localTodos){
      return
    }
    localTodos=JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  return (
    <main>
      <TodoInput todoValue={todoValue} setTodosValue={setTodosValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos}/>
    </main>
  )
}

export default App
