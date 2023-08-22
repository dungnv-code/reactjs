import './App.css';
import { useEffect, useState } from 'react'
import Loading from './loading'
import Tours from './tours';
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(false);
  const [tours, setTours] = useState([]);
  function hanleRemove(id) {
    const newtours = tours.filter((item) => item.id != id);
    setTours(newtours);
  }
  const fetchTour = async () => {
    setLoading(true);
    try {
      const repon = await fetch(url);
      const tour = await repon.json();
      setLoading(false);
      setTours(tour)
      { console.log('render') }
    } catch (error) {
      setLoading(false);
      console.log('error')
    }
  }

  useEffect(() => {
    fetchTour();
  }, [])
  console.log('render');
  if (loading) {
    return (
      <Loading />
    )
  }
  if (tours.length === 0) {
    return <main>
      <div className='title'>
        <h2> No tour left</h2>
        <div className='underline'></div>
        <div style={{ textAlign: 'center' }}>
          <button onClick={fetchTour} style={{ padding: '5px' }}>
            refresh
          </button>
        </div>
      </div>

    </main>
  }
  return (<main className="App">
    <Tours
      tours={tours}
      hanleRemove={hanleRemove}
    />
  </main>
  );
}
export default App;

