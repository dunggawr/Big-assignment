import { UpdateDate, UpdateName, UpdatePrice } from './Update/Update'
import { useState } from 'react'

const Bil = (item) => {
    const mon = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octobor', 'November', 'December']

    let t

    const [DATE, setDATE] = useState(false)
    const [NAME, setNAME] = useState(false)
    const [PRICE, setPRICE] = useState(false)

    // Hiện form cập nhập ngày, tháng, năm
    const changeDate = () => {
        setDATE(true)
        setNAME(false)
        setPRICE(false)
    }

    // Hiện form cập nhập tên đơn
    const changeName = () => {
        setNAME(true)
        setPRICE(false)
        setDATE(false)
    }

    // Hiện form cập nhập giá
    const changePrice = () => {
        setPRICE(true)
        setDATE(false)
        setNAME(false)
    }

    // Xóa
    const del = () => {
        t = item.Date.filter((props) => props.bil !== item.current[item.index].bil)
        item.setDate(t)
    }

    return (
        <li id='ul__li' >
            <div id='li__d' >
                <div id='d__div' onClick={changeDate}>
                    <div id='div1' >
                        {mon[item.thang]}
                    </div>

                    <div id='div2' >
                        {item.nam}
                    </div>

                    <div id='div3'>
                        {item.ngay}
                    </div>
                </div>

                <div onClick={changeName}>
                    {item.bil}
                </div>
            </div>

            <div>
                <span onClick={del}>delete</span>
                <span id='span' onClick={changePrice}>
                    $ {item.price}
                </span>
            </div>

            {DATE && <UpdateDate Date={item.Date} current={item.current} setDate={item.setDate} index={item.index} setDATE={setDATE} />}
            {NAME && <UpdateName Date={item.Date} current={item.current} setDate={item.setDate} index={item.index} setNAME={setNAME} />}
            {PRICE && <UpdatePrice Date={item.Date} current={item.current} setDate={item.setDate} index={item.index} setPRICE={setPRICE} />}
        </li>
    )
}

export default Bil