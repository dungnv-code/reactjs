import Tour from './tour'
function Tours({ tours, hanleRemove }) {
    return <section className='body-tour'>
        <div className='title'>
            <h2>Our tours</h2>
            <div className='underline'></div>
        </div>
        <div style={{ textAlign: 'center' }}>
            {
                tours.map((item) => {
                    return <Tour
                        key={item.id}
                        {...item}
                        hanleRemove={hanleRemove}
                    ></Tour>
                })
            }
        </div>
    </section>
}

export default Tours