import { IoMdAdd } from 'react-icons/fa';
import './App.css';
import data from './data';
import { useState } from 'react';
import Question from './question';
function App() {
  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className='Container' style={{ display: 'flex' }}>
        <h3 style={{ paddingRight: '30px' }}>Questions and answers about login</h3>
        <section className='info' style={{ paddingLeft: '30px' }}>
          {
            question.map((item) => {
              return <Question key={item.id} {...item} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
