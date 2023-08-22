import logo from './logo.svg';
import './App.css';

import Reviews from './review';

function App() {

  return (<main>
    <section>
      <div className='title'>
        <h2>Our review</h2>
        <div className='underline'></div>
      </div>
      <Reviews ></Reviews>
    </section>
  </main>
  );
}

export default App;
