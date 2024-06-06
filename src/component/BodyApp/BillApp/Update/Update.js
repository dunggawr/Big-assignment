import './Update.css'
import { useState, useRef } from 'react'

// Cập nhập ngày
const UpdateDate = (item) => {
    const formRef = useRef(null)

    let month, day
    // Nếu tháng < 10 thì thêm 0 vào trước để đúng định dạng (do tháng bắt đầu từ 0 nên + 1).
    if (item.current[item.index].thang < 9) {
        month = `0${item.current[item.index].thang + 1}`
    } else {
        month = item.current[item.index].thang + 1
    }

    // Nếu ngày < 10 thì thêm 0 vào trước để đúng định dạng
    if (item.current[item.index].ngay < 10) {
        day = `0${item.current[item.index].ngay}`
    } else {
        day = item.current[item.index].ngay
    }

    const [newDate, setNewDate] = useState(`${item.current[item.index].nam}-${month}-${day}`)

    // Submit form để update Date
    const handleSub = (e) => {
        e.preventDefault()

        const d = new Date(newDate);
        const ngay = d.getDate()
        const thang = d.getMonth()
        const nam = d.getFullYear()

        console.log(nam);

        item.setDate(
            item.Date.map((props) => {
                if (props.bil === item.current[item.index].bil) {
                    return {
                        ngay: ngay,
                        thang: thang,
                        nam: nam,
                        bil: props.bil,
                        price: props.price,
                    }
                } else {
                    return props
                }
            }))
    }

    // hủy form
    const cancle = () => {
        item.setDATE(false)
    }

    // Thay đổi value của input
    const handleUpdateDate = (e) => {
        setNewDate(e.target.value)
    }



    return (
        <div ref={formRef} className="update">
            <div className="upDiv">cập nhập ngày</div>
            <form onSubmit={handleSub}>
                <input className="upInput" type='date' value={newDate} onChange={handleUpdateDate} />
                <input type='submit' />
            </form>
            <button className="upBtn" onClick={cancle}>Hủy</button>
        </div>
    )
}

// Cập nhập tên bill
const UpdateName = (item) => {
    const formRef = useRef(null)

    const [newName, setNewName] = useState(item.current[item.index].bil)

    // Submit form để cập nhật tên
    const handleSub = (e) => {
        e.preventDefault()

        item.setDate(
            item.Date.map((props) => {
                if (props.bil === item.current[item.index].bil) {
                    return {
                        ngay: props.ngay,
                        thang: props.thang,
                        nam: props.nam,
                        bil: newName,
                        price: props.price,
                    }
                } else {
                    return props
                }
            }))
    }

    // Hủy form
    const cancle = () => {
        item.setNAME(false)
    }

    // Thay đổi value input
    const handleUpdateName = (e) => {
        setNewName(e.target.value)
    }

    return (
        <div ref={formRef} className="update" >
            <div className="upDiv">Cập nhập tên bill</div>
            <form style={{}} onSubmit={handleSub} >
                <input className="upInput" type='text' value={newName} onChange={handleUpdateName} />
            </form>
            <button className="upBtn" onClick={cancle}>Hủy</button>
        </div>
    )
}

// Cập nhập giá
const UpdatePrice = (item) => {
    const formRef = useRef(null)

    const [newPrice, setNewPrice] = useState(item.current[item.index].price)

    // Submit form để cập nhập giá
    const handleSub = (e) => {
        e.preventDefault()

        item.setDate(
            item.Date.map((props) => {
                if (props.bil === item.current[item.index].bil) {
                    return {
                        ngay: props.ngay,
                        thang: props.thang,
                        nam: props.nam,
                        bil: props.bil,
                        price: newPrice,
                    }
                } else {
                    return props
                }
            }))
    }

    // Hủy form
    const cancle = () => {
        item.setPRICE(false)
    }

    // Thay đổi value input    
    const handleUpdatePrice = (e) => {
        setNewPrice(e.target.value)
    }

    return (
        <div ref={formRef} className="update">
            <div className="upDiv">Cập nhập giá</div>
            <form onSubmit={handleSub} >
                <input className="upInput" type='number' value={newPrice} onChange={handleUpdatePrice} />
            </form>
            <button className="upBtn" onClick={cancle}>Hủy</button>
        </div>
    )
}

export { UpdateDate, UpdateName, UpdatePrice }