
import listData from "../data/ListData"

import ToDo from "./ToDo"

export default function List() {

    const toDos = listData.map(( item , index )=> <ToDo key={index} task={item.task} /> )

    return (
        
        <ul className="list-section">

            { toDos }
            
        </ul>

    )
}