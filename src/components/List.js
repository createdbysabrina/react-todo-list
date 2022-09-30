
import listData from "../data/ListData"


export default function List() {

    const items = listData.map(( item )=> <li>{ item }</li> )

    return (
        <ul className="list-section">

            { items}
            
        </ul>

    )
}