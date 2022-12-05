export default function AddItem(props) {

    const { 
        addTask, 
        submitTask, 
        textEmpty, 
        isBtnDisabled,
        isSelected,
    } = props

    return (

        <>  
           { isSelected && ( 
              <input 
                className="add-item-checkbox"
                type="checkbox">
              </input>
             )
            }
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
                disabled={isBtnDisabled}
            >
                Add Item
            </button>

            {textEmpty && (
                <p className="text-validation">
                  Add Item is empty, add a To Do Task 
                </p> )
            }

        </>
    )
}