import './App.css';
import data from './data'
import { useState } from 'react';
import Menu from './Menu'
import Category from './Category'

function App() {
  const [menu, setMenu] = useState(data);
  const [category, setCategory] = useState([]);
 

  function FilterCategry(category) {
    const newMenu = data.filter((item) => item.category == category)
    if (category == 'all') {
      setMenu(data);
    } else {
      setMenu(newMenu);
    }
  }

  return (
    <main className="App">
      <div className='title' style={{ width: '10%' }}>
        <h3>Our menu</h3>
        <div className='underline'></div>
      </div>
      <Category FilterCategory={FilterCategry} />

      <Menu item={menu} />

    </main>
  );
}

export default App;
