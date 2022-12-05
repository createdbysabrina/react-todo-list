export default function AddItem(props) {

    const { addTask, submitTask } = props
    


    return (

        <>
            <input
                className="add-item-input"
                type="text" 
                placeholder=" Add a new item..."
                onChange={addTask}
            >
            </input>
            
            <button 
                className="add-item-btn"
                onClick={submitTask}
            >
                Add Item
            </button>
        </>
    )
}