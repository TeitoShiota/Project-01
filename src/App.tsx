import { useEffect, useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0);
  const [actionSelctor, setActionSelector] = useState(0);
  const [action, setAction] = useState('add');
  const [result,setResult] = useState('');

  useEffect(() => {
    switch(actionSelctor){
      case 0: setAction('add'); break;
      case 1: setAction('subtract'); break;
      case 2: setAction('multiply'); break;
      case 3: setAction('divide'); break;
    }
  }, [actionSelctor])

  function updateHandler(v1:number,v2:number){
    setResult((): string => {
      switch(actionSelctor){
        case 0: return (v1 + v2).toString();
        case 1: return (v1 - v2).toString();
        case 2: return (v1 * v2).toString();
        case 3: return (v1 / v2).toString();
        default: return '';
      }
    } );
  }

  return (
    <>
      <input id='inputField01' type="number" />
      <p>{action}</p>
      <input onChange={(event) => {setActionSelector(event.target.valueAsNumber)}} type="range" name="action" id="action" min={0} max={3} step={1} value={actionSelctor}  />
      <input id='inputField02' type="number" />
      <button onClick={()=> {updateHandler((document.querySelector<HTMLInputElement>('inputField01').valueAsNumber), (document.querySelector<HTMLInputElement>('inputField02').valueAsNumber))}}>Update</button>
      <h2>Result: {result}</h2>
    </>
  )
}

export default App
