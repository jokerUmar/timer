import { useEffect, useState } from 'react'
import './App.css'

function App() {

const [second, setSecond] = useState(0);
const [minute, setMinute] = useState(0);
const [clock, setClock] = useState(0);


useEffect(() => {

setTimeout(() => {
setSecond((second) => second +1);
}, 1000);

} , );

if (second===60) {
setMinute(minute+1)
setSecond(0)
}else if(minute===60){
setClock(clock+1)
setMinute(0)
}


let restart  = () =>{
  setSecond(0)
  setMinute(0)
  setClock(0)
}

let stop = () =>{
  clearTimeout()
}

return (
<div className="App">
  <div>
    <h1> <span>{clock}</span> : <span>{minute}</span> : <span>{second}</span> </h1>
    <button onClick={() => restart()}>restart</button>
    <button onClick={() => stop()}>stop</button>
    <button className='go'>go</button>
  </div>
</div>
)
}

export default App