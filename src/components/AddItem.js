export default function AddItem(props) {

  

    return (

        <>
            <input
                type="text" 
                placeholder=" Add a new item..."
                className="add-item-input"
            >
            </input>
            
            <button className="add-item-btn">
                Add Item
            </button>
        </>
    )
}