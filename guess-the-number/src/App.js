import { useState } from 'react';
import './App.css';
import Result from './components/Result';
const SecertNum = Math.floor(Math.random() * 10) + 1;

function App() {
  const [term, setTerm] = useState("")

  const handleChange = (e)=> {
    setTerm(e.target.value)
  }

  return (
    <div className="container">
      <div className="head">
        <label htmlFor='term'>Guess the number between 1 to 10</label>
      </div>
      <input id='term' onChange={handleChange} className='term' type='text' name='term'/>
      <Result term={term} secertNum={SecertNum}/>
    </div>
  );
}

export default App;
