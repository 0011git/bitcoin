import Button from './Button';
import appCss from './App.module.css';
import Todolist from './Todolist';
import Coin from './Coin';
import { useState } from 'react';

function App() {
  const [category, setCategory] = useState(null);
  const onRadio = (event) => {
    setCategory(() => event.target.id);
  }
  
  return (
    <>
    <h1 className={appCss.title}>logo</h1>
    <ul>
      <li>
        <label htmlFor='todolist'>
          <input onClick={onRadio} id='todolist' type='radio' name='category'/>todolist
        </label>
      </li>
      <li>
        <label htmlFor='coin'>
          <input onClick={onRadio} id='coin' type='radio' name='category' />coin
        </label>
      </li>
    </ul>
    <hr />
    <div>
      {category === 'todolist' ? <Todolist /> : null}
      {category === 'coin' ? <Coin /> : null}
    </div>
    </>
  );
}


export default App;