import { useState } from 'react'
function Tour({ id, name, image, info, price, hanleRemove }) {
 
    const [readmore, setReadmore] = useState(true);
    return (
        <article className='single-tour' >
            <img src={image} alt='tour-single' width='100%' height='500px' />
            <footer style={{ display: 'flex', justifyContent: 'space-between', margin: '10px ' }} className='footer-tour'>
                <div className='tour-info'>
                    <h4 style={{ fontSize: '20px' }}>{name}</h4>
                </div>
                <div className='tour-price' >
                    <h4>${price}</h4>
                </div>
            </footer>
            <p className='tour-p'>{readmore ? info : `${info.substring(0, 200)}...`} <span className='read-btn' onClick={() => setReadmore(!readmore)}>{readmore ? 'show less' : 'read most'}</span></p>
            <button className='delete-btn' onClick={() => hanleRemove(id)}>not interested</button>
        </article>
    )
}

export default Tour;