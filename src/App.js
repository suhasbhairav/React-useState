import './App.css';
import React, {useState} from 'react';

function App() {
  const [state, setstate] = useState("Suhas");
  const [number, setNumber] = useState(0);

  const changeValue = () => {
    setstate("Bhairav");
    setNumber(10);
  };

  return (
    <div className="App">
      <div>Hello {state}</div>
      <div>This is a {number}</div>
      <button onClick={changeValue}>Click</button>
    </div>
  );
}

export default App;
