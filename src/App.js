import { useState } from 'react'
import Header from './components/Header'
import ToDoList from './components/ToDoList'
import AddItem from './components/AddItem'
import ButtonPanel from './components/ButtonPanel'

function App() {

  let mockData = []

    let textValue = "";

    const handleChange = (e) => {
       textValue = e.currentTarget.value
    }

    const handleSubmit = () => {
        
       console.log(textValue, "whats in textValue")
       console.log(mockData, "what is mockdata before the update")
       mockData = [...mockData, { task: textValue }]
       console.log(mockData, 'mockData')
    }

  return (
    <>
      <Header />
      <AddItem 
        addTask={handleChange} 
        submitTask={handleSubmit} 
      />
      <ToDoList items={mockData}/>
      <ButtonPanel />
    </>

  )

}

export default App;
