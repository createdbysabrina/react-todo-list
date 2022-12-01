export default function ToDo(props) {

    const { task } = props;

    return (
        <li className="todo-item"> 
            
            { task } 
            
            <button className="completed-btn"> 
                Completed
            </button>
            <button className="deleted-btn"> 
                Delete
            </button>
            <button className="archive-btn"> 
                Archive
            </button> 

        </li>
    )
}