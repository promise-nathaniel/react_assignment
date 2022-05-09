import logo from './logo.svg';
import Button from './component/Button/Button';
import InputSpace from './component/Input/InputField';
import './App.css';
import {useState} from 'react';



function App() {

  const [counter, setCounter] = useState(1)

  const increment = () => {
    const newCounter = counter * 2;
    setCounter(newCounter)
  }

  const decrement = () => {
    const newCounter = Math.floor(counter / 2);
    if (newCounter <= 0){
      alert ('cannot proceed further')
    }else {
    setCounter(newCounter)
    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <p>
          <InputSpace value={counter} />
        </p>
        <p>
          <Button handleClick={increment}  title='Multiply Counter by 2' />
        </p>

        <p>
          <Button handleClick={decrement}  title='Divide Counter by 2' />
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
