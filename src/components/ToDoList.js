import React from 'react'
import listData from "../data/ListData"
import ToDo from "./ToDo"

export default function List() {

    const toDos = listData.map(( item , index )=> <ToDo key={index} task={item.task} /> )
    console.log(toDos, 'from ToDoList Comp')
    return (
        
        <ul className="list-section">

            { toDos }
            
        </ul>

    )
}