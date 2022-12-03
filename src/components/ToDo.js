export default function ToDo(props) {

    const { task } = props;

    return (
        <li className="todo-item"> 
            
            <span>{ task }</span> 

        </li>
    )
}