
function Category({ FilterCategory }) {

    return (
        <div className='Category-header'>
            <div style={{ padding: '10px' }} onClick={() => FilterCategory('all')}>All</div>
            <div style={{ padding: '10px' }} onClick={() => FilterCategory('breakfast')}>Breakfast</div>
            <div style={{ padding: '10px' }} onClick={() => FilterCategory('lunch')}>Lunch</div>
            <div style={{ padding: '10px' }}></div>
        </div>
    )
}

export default Category;