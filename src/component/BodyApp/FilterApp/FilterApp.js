import './FilterApp.css'

const FltApp = (item) => {

    const day = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


    return (
        <div>
            <ul className='ul'>
                {item.filterMonth.map((props, i) => {
                    return (
                        <li className='ul__li' key={i}>
                            <div className='li__d'>
                                <div
                                    className='d__div'
                                    style={{height: `${props}%`}}
                                >
                                </div>
                            </div>
                            {day[i]}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default FltApp;