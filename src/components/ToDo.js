export default function ToDo(props) {
  const { task } = props
  return (
    <li className="todo-item">
      <input className="add-item-checkbox" type="checkbox"></input>

      <span>{task}</span>
    </li>
  )
}
