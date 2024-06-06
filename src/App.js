import HderApp from "./component/HeaderApp/HeaderApp";
import BdApp from "./component/BodyApp/BodyApp";
import { useState, useEffect } from "react";

function App() {
  // input người dùng nhập từ bàn phím
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
 
  // ngày, tháng, năm lấy từ date
  const [dat, setDat] = useState(0)
  const [month, setMonth] = useState(0)
  const [year, setYear] = useState(0)

  // dep để useEffect thêm sản phẩm
  const [isAdd, setIsAdd] = useState()


  return (
    <div>
      <HderApp
        isAdd={isAdd}
        setIsAdd={setIsAdd}

        name={name}
        amount={amount}
        date={date}

        setName={setName}
        setAmount={setAmount}
        setDate={setDate}

        setDat={setDat}
        setMonth={setMonth}
        setYear={setYear}
        />

      <BdApp

        setName={setName}
        setAmount={setAmount}
        setDate={setDate}

        isAdd={isAdd}

        name={name}
        amount={amount}
        date={dat}
        month={month}
        year={year}
      />
    </div>
  );
}

export default App;
