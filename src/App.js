import React, { useState } from 'react'
import ToDoList from './components/ToDoList'
import AddItem from './components/AddItem'
import ButtonPanel from './components/ButtonPanel'

function App() {
  let textValue = ''

  const [toDoData, setToData] = useState([])
  const [emptyText, setEmptyText] =
    useState(false)
  const [btnDisabled, setBtnDisabled] =
    useState(true)
  // const [selectDeletedItems, setSelectDeletedItems ] = useState(false)

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

  const noOfTasks = toDoData.length

  // const handleDeleted = (e) => {
  //   setToData([...toDoData, { task: textValue }])
  // }

  return (
    <main className="home">
      <section className="container column-layout">
        <h1 className="task-announcment">
          You have {noOfTasks} task to do today!
        </h1>
        <p className="task-date">
          Saturday, October 21st 2023
        </p>
        <AddItem
          addTask={handleChange}
          submitTask={handleSubmit}
          textEmpty={emptyText}
          isBtnDisabled={btnDisabled}
        />
        <ButtonPanel />
        <ToDoList items={toDoData} />
      </section>
    </main>
  )
}

export default App
