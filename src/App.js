import {useState} from 'react';
import './App.css';
import Stylechanger from './Stylechanger/Stylechanger';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Fontchanger from './Fontchanger/Fontchanger';

function App() {
  // const [change,update]=useState("CNC Web World");
  let [count,setCount]=useState(1);
  function subt() {
    if (count>=1) {
      count -=1;
      setCount(count);
    }
  }

  function add() {

    if (count<100) {
      count+=1;
      setCount(count);
    } 

    }
  
  // console.log(useState());
  return (
    <>
      {/* <h1>{change}</h1>
      <button onClick={()=> update("RuhTech")}>Click me</button> */}

      <h1>Counter(Automatically data add and sub)</h1>
      <h2>Value: {count}</h2>
      <button onClick={add}>Add</button>
      &nbsp;
      <button onClick={subt}>Subtract</button>
      <hr></hr>
      <Stylechanger />
      <Fontchanger />
    </>
  );
}

export default App;
