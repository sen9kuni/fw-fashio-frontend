import React from 'react'

function Counter() {
    const [num, operation] = React.useState(0)
    const [numb, operations] = React.useState(0)

    return (
        <div className='d-flex gap-5 mb-5'>
                        <div className='d-flex flex-column gap-2'>
                            <span className='fash-h4'>Size</span>
                            <div className="d-flex gap-2 align-items-center">
                                <button className='rounded-circle product-counter-btn' onClick = {()=> operation(num - 1)}>-</button>
                                <span>{num}</span>
                                <button className='rounded-circle product-counter-btn' onClick = {()=> operation(num + 1)}>+</button>
                            </div>
                        </div>
                        <div className='d-flex flex-column gap-2'>
                            <span className='fash-h4'>Jumlah</span>
                            <div className="d-flex gap-2 align-items-center">
                                <button className='rounded-circle product-counter-btn' onClick = {()=> operations(numb - 1)}>-</button>
                                <span>{numb}</span>
                                <button className='rounded-circle product-counter-btn' onClick = {()=> operations(numb + 1)}>+</button>
                            </div>
                        </div>                        
                    </div>
    )
}

export default Counter
