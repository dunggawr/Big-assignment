import FltApp from "./FilterApp/FilterApp.js"
import Bill from "./BillApp/BillApp.js"
import './BodyApp.css'
import { useState } from "react"

const BdApp = (item) => {
    const [year, setYear] = useState([2021, 2022, 2023, 2024])
    const [currentYear, setCurrent] = useState(2021)

    const [filterMonth, setFilterMonth] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])

    const handleChangeYear = (e) => {
        setCurrent(e.target.value)
    }

    return (
        <div className="d">
            <div className="di">Filter by year
                <select
                    value={currentYear}
                    className="select"
                    onChange={handleChangeYear}
                >
                    {year.map((item, i) => <option key={i} value={item}>{item}</option>)}
                </select>
            </div>

            <FltApp
                filterMonth={filterMonth}
            />

            <Bill
                isAdd={item.isAdd}
                year={item.year}

                currentYear={currentYear}
                name={item.name}

                amount={item.amount}
                date={item.date}

                setName={item.setName}
                setAmount={item.setAmount}

                setDate={item.setDate}
                month={item.month}

                filterMonth={filterMonth}
                setFilterMonth={setFilterMonth}
            />
        </div>
    )
}

export default BdApp;