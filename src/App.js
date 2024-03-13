import './App.css';
import { useState } from 'react';

function App() {


  const [counter, setCount] = useState(0)

  const upClick = () => {
    setCount(counter + 1)
  }

  const downClick = () => {
    setCount(counter - 1)
  }

  const resetClick = () => {
    setCount(0)
  }

  let background;
  if (counter < 0) {
    background = "red-background"
  }

  else if (counter > 0) {
    background = "green-background"
  }

  else {
    background = "white-background"
  }

  // const background = counter === 0 ? "white-background" : counter < 1 ? "red-background" : "green-background";



  return (
    <div className={`App ${background}`}>
      <div>
        <h1>Clicker</h1>
        <div className='main-panel'>
          <p>{counter}</p>
          <div className='buttons'>
            <button className='red' onClick={downClick}>Down</button>
            <button className='white' onClick={resetClick}>Reset</button>
            <button className='green' onClick={upClick}>Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
