import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddItem from './components/AddItem'
import ButtonPanel from './components/ButtonPanel'
import listData from './data/ListData'

function App() {

  let textValue = ""

  const [toDoData, setToData ] = useState(listData)

  const handleChange = (e) => {
    textValue = e.currentTarget.value
  }

  const handleSubmit = () => {
    setToData([...toDoData, { task: textValue }])
  }

  return (
    <>
      <Header />
      <AddItem 
        addTask={handleChange} 
        submitTask={handleSubmit} 
      />
      <ToDoList items={toDoData}/>
      <ButtonPanel />
    </>

  )

}

export default App;
