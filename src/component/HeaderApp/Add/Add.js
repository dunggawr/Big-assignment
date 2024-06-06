import './Add.css'

const Add = (event) => {
    const handleAdd = () => {
        event.setAdd(false)
    }

    return (
        <div className='div'>
            <button className='button' onClick={handleAdd}>
                ADD NEW EXPENSE
            </button>
        </div>
    )
}

export default Add;