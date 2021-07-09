import './App.css';
import React, {useState} from 'react';

function App() {
  const [state, setstate] = useState("Suhas");
  const [number, setNumber] = useState(0);
  const [age, setAge] = useState(10);
  
  const changeValue = () => {
    setstate("Bhairav");
    setNumber(10);
  };

  const increaseAge = () => {
    setAge(20 * Math.random());
  };


  return (
    <div className="App">
      <div>Hello {state}</div>
      <div>This is a {number}</div>
      <button onClick={changeValue}>Click</button>
      <div>
        Age is {age}
        <button onClick={increaseAge}>Click Here</button>
      </div>
    </div>
  );
}

export default App;
