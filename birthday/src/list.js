import data from './data'

function List({ people }) {
    return (
        <ul>
            {
                people.map((item, index) => {
                    return <li key={index} style={{ display: 'flex', justifyContent: 'space-between', margin: '5px 0px' }}>
                        <img src={item.img} style={{ width: '60px', height: '60px', borderRadius: '50%' }} />
                        <div className='info'>
                            <div>{item.name}</div>
                            <div>{item.age}</div>
                        </div>
                    </li>
                })
            }
        </ul>
    )
}

export default List