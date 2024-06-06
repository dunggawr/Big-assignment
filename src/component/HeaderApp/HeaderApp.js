import Form from './Form/Form.js'
import Add from './Add/Add.js';
import { useState } from 'react';

const HderApp = (i) => {
    const [add, setAdd] = useState(true)

    return (
        <div>
            {add
                ? <Add add={add} setAdd={setAdd} />
                : <Form add={add}
                    setIsAdd={i.setIsAdd}
                    isAdd={i.isAdd}

                    setAdd={setAdd}

                    name={i.name}
                    amount={i.amount}
                    date={i.date}

                    setName={i.setName}
                    setAmount={i.setAmount}
                    setDate={i.setDate}

                    setDat={i.setDat}
                    setMonth={i.setMonth}
                    setYear={i.setYear}
                />
            }
        </div>
    )
}

export default HderApp;