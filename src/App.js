import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
function addTransaction(ev) {
  ev.preventDefault();
  const url = process.env.REACT_APP_API_URL+'/transaction';
  console.log(url);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      datetime,
      description})
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
  });
}

  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addTransaction}>
        <div className='basic'>
          <input 
            type="text" 
            value={name} 
            onChange={ev => setName(ev.target.value)}
            placeholder={'+5 eat chicken rice'}/>
         <input 
            type="datetime-local" 
            value={datetime} 
            onChange={ev => setDatetime(ev.target.value)}
          />
        </div>
        
        <div className='description'>
          <input 
            type="text" 
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'}/>
        </div>
        
        <button type='submit'>Add new</button>
        <div className='transactions'>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>Chicken Rice</div>
              <div className='description'>I ate chicken rice</div>
            </div>
            <div className='right'>
              <div className='price green'>+$5.00</div>
              <div className='datetime'>2024-2-26 22:16</div>
            </div>
          </div>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>Chicken Rice</div>
              <div className='description'>I ate chicken rice</div>
            </div>
            <div className='right'>
              <div className='price red'>-$5.00</div>
              <div className='datetime'>2024-2-26 22:16</div>
            </div>
          </div>

          <div className='transaction'>
            <div className='left'>
              <div className='name'>Chicken Rice</div>
              <div className='description'>I ate chicken rice</div>
            </div>
            <div className='right'>
              <div className='price green'>+$5.00</div>
              <div className='datetime'>2024-2-26 22:16</div>
            </div>
          </div>

        </div>
      </form>
    </main>
  );
}

export default App;
