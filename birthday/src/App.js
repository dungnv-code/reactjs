import './App.css';
import data from './data'
import List from './list'
import { useState } from 'react'
function App() {
  const [people, setPeople] = useState(data);
  function hanleClear() {
    setPeople([]);
  }
  return (<main>
    <section className='container body' style={{ margin: '5px 10px' }}>
      <h3>{people.length} bridays today</h3>
      <List people={people} />
      <button onClick={() => hanleClear()} style={{ marginTop: '10px' }}>Clear</button>
    </section>
  </main>
  );
}

export default App;
