import React from 'react'

function Todo({ text, completed, todo, todos, setTodos}) {
  //events
  function deleteHandler() {
    setTodos(todos.filter(el => el.id !== todo.id))
  }
  function completeHandler() {
    setTodos(todos.map(el => {
      if(el.id === todo.id){
        return{
          ...el, completed: !el.completed
        }
      }
      return el
    }))
  }
  return(
    <div className="todo ">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className='completed-btn'>
        <i className='fas fa-check'></i>
      </button>
      <button onClick={deleteHandler} className='trash-btn'>
        <i className="fas fa-trash"></i>
      </button> 
    </div>
  )
}

export default Todo;