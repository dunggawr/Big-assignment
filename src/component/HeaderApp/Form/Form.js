import './Form.css'

const Form = (item) => {
    // sử lý sự kiện submit
    const handleSubmit = (e) => {
        e.preventDefault()

        const d = new Date(item.date);
        item.setDat(d.getDate())
        item.setMonth(d.getMonth())
        item.setYear(d.getFullYear())

        item.setIsAdd(!item.isAdd)
    }
    // Huỷ việc thêm vào danh sách 
    const handleCancle = () => {
        item.setAdd(true)
    }

    // Thay đổi giá trị Date
    const changeDate = (e) => {
        item.setDate(e.target.value)
    }

    // Thay đổi giá trị name
    const changeName = (e) => {
        item.setName(e.target.value)
    }

    // Thay đổi giá trị amount
    const changeAmount = (e) => {
        item.setAmount(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} id='form'>
            <div id="Name">
                Name
                <input
                    type='text'
                    value={item.name}
                    onChange={changeName}
                    placeholder="Enter name here ..."
                />
            </div>

            <div id="Amount">
                Amount
                <input
                    type='number'
                    value={item.amount}
                    onChange={changeAmount}
                    placeholder="Enter amount here ..."
                />
            </div>

            <div id='Date'>
                Date
                <input
                    type="date"
                    value={item.date}
                    onChange={changeDate}
                />
            </div>


            <div className="btn">
                <button className="add">ADD</button>

                <button
                    className="cancle"
                    type="submit"
                    onClick={handleCancle}
                >
                    CANCLE
                </button>
            </div>
        </form>
    )
}


export default Form;