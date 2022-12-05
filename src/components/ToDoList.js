import ToDo from "./ToDo"

export default function List({ items }) {

    const toDos = items.map(( item , index )=> <ToDo key={index} task={item.task} /> )
  
    return (
        
        <ul className="list-section">
            { toDos }
        </ul>

    )
}