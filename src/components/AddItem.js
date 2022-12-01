import { useRef } from 'react';

export default function AddItem(props) {

    const inputRef = useRef(null)

    const btnHandler = () => {
        console.log(inputRef.current.value, "value from input")
    }


    return (

        <>
            <input
                ref={inputRef}
                type="text" 
                placeholder=" Add a new item..."
                className="add-item-input"
            >
            </input>
            
            <button 
                className="add-item-btn"
                onClick={btnHandler}
            >
                Add Item
            </button>
        </>
    )
}