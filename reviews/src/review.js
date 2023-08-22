import data from './data'
import { useState } from 'react';

function Reviews() {
    const [index, setIndex] = useState(0);
    const { id, name, job, text, img } = data[index];
    const [readmore, setReadmore] = useState(true);
    function hanleLeft() {
        if (index === 0) {
            setIndex(4);
        } else {
            setIndex(prev => prev - 1);
        }

    }
    function hanleRight() {
        if (index === 4) {
            setIndex(0);
        } else {
            setIndex(prev => prev + 1);
        }

    }
    return (
        <div className='review-peoples' style={{ textAlign: 'center', margin: '10px 0px', boxShadow: '5px 5px 10px 10px rgba(0,0,0,.1)', padding: '10px' }}>
            <img src={img} alt='people' style={{ borderRadius: '50%', width: '100px', height: '100px' }} />
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p> {readmore ? `${text.substring(0, 100)}` : text}
                <button onClick={() => setReadmore(!readmore)}>{readmore ? 'Read more' : 'Show less'}</button>
            </p>
            <div style={{ padding: '6px' }}>
                <button style={{ marginRight: '10px', padding: '2px 10px' }} onClick={() => hanleLeft()}>Left</button>
                <button style={{ marginLeft: '10px', padding: '2px 10px' }} onClick={() => hanleRight()}>Right</button>
            </div>
            <div style={{ textAlign: 'center', padding: '7px' }}>
                <button style={{ padding: '2px 10px' }} onClick={() => hanleRight()}>Supper Me</button>
            </div>
        </div >
    )
}


export default Reviews;