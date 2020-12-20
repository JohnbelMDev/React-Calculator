import React, {useState} from 'react';
import Appcss from './App.css';
import ReactDOM from 'react-dom';

function App() {
  const [num1, setNum1] = useState(0)

  const [num2, setNum2] = useState(0)

  const [total, setTotal] = useState(num1 + num2);

  const [toggled, setToggled] = useState(false)

  // const [product, setProduct] = useState(num1 + num2);

  function calCulateTotal (){
    setTotal(num1 + num2)
  }

  function calCulateProduct (){
    setTotal(num1 * num2)
  }

  function subTractThem (){
    setTotal(num1 - num2)
  }

  function divideThem (){
    setTotal(num1 / num2)
  }

  return (



    <div className="App">
    <h1>React Calculator</h1>
    <div className="number-inputs">
    <input type="number" onChange = {e => setNum1(+e.target.value)}  value = {num1} />
    <input type="number" onChange = {e => setNum2(+e.target.value)} value = {num2} />
    </div>
    <div className ="Buttons">
    <button onClick ={calCulateTotal}>Add Them</button>
    <button onClick ={calCulateProduct}>Multiply Them</button>
    <button onClick ={subTractThem}>SubTractThem Them</button>
    <button onClick ={divideThem}>Divide Them!</button>
    </div>
    <h3>{toggled && <> {total} </>}</h3>
    <button onClick ={()=> setToggled(toggled => !toggled)}>
    click to show result
    </button>


    </div>
  );
}

export default App
