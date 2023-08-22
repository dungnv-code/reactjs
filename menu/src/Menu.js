

function Menu({ item }) {
    console.log(item)
    return (
        <div ClassName='selection-center' style={{ margin: '0px auto', width: '60%' }}>
            {item.map((items) => {
                const { id, img, title, desc, price } = items;
                return <div key={id} style={{ display: 'flex',margin:'20px' }}>
                    <img src={img} alt='menu' width='250px' height='150px' />
                    <div className='menu-info'>
                        <header style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <h4>{title}</h4>
                            <div className='price'>{price}$</div>
                        </header>
                        <div className='underline'></div>
                        <p>{desc}</p>
                    </div>
                </div>
            })}
        </div >
    )
}

export default Menu;