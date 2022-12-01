
import listData from "../data/ListData"

import ToDo from "../components/ToDo"

export default function List() {

    const items = listData.map(( item , index )=> <ToDo key={index} task={item} /> )

    return (
        
        <ul className="list-section">

            { items }
            
        </ul>

    )
}