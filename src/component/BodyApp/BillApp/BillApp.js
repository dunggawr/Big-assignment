import { useEffect, useState } from 'react'
import Bil from './Bill.js'
import './BillApp.css'

const Bill = (item) => {
    // Bill trong năm chỉ định
    const [current, setCurrrent] = useState([])

    // Bills trong các năm
    const [Date, setDate] = useState([
        {
            ngay: 20,
            thang: 5,
            nam: 2024,
            bil: `Shark's Merch`,
            price: 85,
        },

        {
            ngay: 16,
            thang: 0,
            nam: 2023,
            bil: 'Some Book',
            price: 50,
        },

        {
            ngay: 10,
            thang: 9,
            nam: 2022,
            bil: 'Electric Bill',
            price: 75,
        },

        {
            ngay: 8,
            thang: 4,
            nam: 2021,
            bil: 'New Bike',
            price: 100,
        }])

    // Cập nhập bill
    useEffect(() => {
        setDate([
            ...Date,
            {
                ngay: item.date,
                thang: item.month,
                nam: item.year,
                bil: item.name,
                price: item.amount,
            }
        ])

        item.setName('')
        item.setAmount('')
        item.setDate('')
    }, [item.isAdd])

    // Lọc bill, cập nhập lại filterMonth
    useEffect(() => {
        const ct = Date.filter((props) => props.nam === Number(item.currentYear))
        setCurrrent(ct)
        return (
            item.setFilterMonth(
                item.filterMonth.map((props, i) => {
                    let t = 0, flag = false
                    for (let j = 0; j < ct.length; j++) {
                        if (i === ct[j].thang) {
                            flag = true
                            t = ct[j].price
                        }
                    }

                    if (flag) {
                        return t
                    } else {
                        return 0
                    }
                })
            )
        )
    }, [item.currentYear, Date])

    return (
        <ul id='ul'>
            {current.map((props, i) => {
                return (
                    <Bil
                        current={current}
                        key={i}
                        Date={Date}
                        setDate={setDate}
                        ngay={props.ngay}
                        nam={props.nam}
                        thang={props.thang}
                        price={props.price}
                        bil={props.bil}
                        index={i}
                    />
                )
            })}
        </ul>
    )
}

export default Bill;