import React, { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddItem from './components/AddItem'
import ButtonPanel from './components/ButtonPanel'
import listData from './data/ListData'

function App() {

  let textValue = ""

  const [toDoData, setToData ] = useState(listData)
  const [emptyText, setEmptyText ] = useState(false)
  const [btnDisabled, setBtnDisabled ] = useState(true)
  const [selectDeletedItems, setSelectDeletedItems ] = useState(false)

  const handleChange = (e) => {
    textValue = e.currentTarget.value
    setBtnDisabled(false)
  }

  const handleSubmit = () => {
    if (textValue === '') {
      setEmptyText(true)
      setBtnDisabled(true)
      return
    }
    setToData([...toDoData, { task: textValue }])
  }

  const handleDeleted = (e) => {
   
    }
    setToData([...toDoData, { task: textValue }])
  }

  return (
    <>
      <Header />
      <AddItem 
        addTask={handleChange} 
        submitTask={handleSubmit}
        textEmpty={emptyText}
        isBtnDisabled={btnDisabled}
      />
      <ToDoList items={toDoData}/>
      <ButtonPanel />
    </>

  )

}

export default App;
