import { useState } from 'react'

function Question({ title, info, id }) {
    const [show, setShow] = useState(false)
    return (
        <div style={{ boxShadow: '2px 2px 3px 3px rgba(0,0,0,.1)', padding: '1px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', }} className='question-info'>
                {id} {title}
                <button style={{ padding: '2px' }} onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
            </div>
            <div style={{ padding: '0 10px', fontFamily:'sans-serif', textTransform:'lowercase'}}> {show && info}</div>
        </div>

    )
}

export default Question;