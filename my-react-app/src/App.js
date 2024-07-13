import React, { useState } from 'react'

const App = () => {
    const [count , setCount] = useState(0)
    console.log(count);
    console.log(setCount);

    const handleClick = () =>{
        setCount(count+1);
    }
    const noClick = () =>{
        setCount(count-1);
    }
    //use state return array of size 2 where one is value and other is function
  return (
    //class based me set state se 
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>+</button>
      <br></br>
      <br></br>

      <button onClick={noClick}>-</button>

    </div>
  )
}

export default App