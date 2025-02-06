import { useState } from 'react'
import './App.css'
import StarRating from './components/index'
function App() {
  const [input, setInput] = useState('')
  const [num, setNum] = useState(5)
  const handleCreate = ()=>{
    const amount = Number(input)
    amount<1 || isNaN(amount) ? alert("Error. Please Enter a valid amount.") : setNum(amount) 
    
    setInput('')
  }

  return (
    <>
      <div className="input">
        <label>Enter the number of Stars:</label> <input type="number" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleCreate}>Create</button>
      </div>
      <StarRating noOfStars={num}/>
    </>
  )
}

export default App
