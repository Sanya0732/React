import React, { useState } from 'react';
import datas from './datas.json';

const Data = () => {
  const [nData, setnData] = useState(datas);
  console.log(datas);
   const handle = ()=>{
    setnData([])
   }
   const handleRemove = (itemId) =>{
    setnData(nData.filter(item => item.id!== itemId))
   }
   const handleUpdate = (itemId) =>{
    setnData(nData.map(items =>{
        if(items.id === itemId){
            return{name:"newName"}
        }else{
            return items;
        }
    }))
   }
  return (
    <div>
      <ul>
        {
          nData.map((items) => (
            <li key={items.id}>
              {console.log(items.id)}
              {items.id}
              {items.name}
              <br></br>
              <br></br>

              <button onClick={() => handleRemove (items.id)}> Remove </button>
              <button onClick={() => handleUpdate (items.id)}> UPDATE </button>

            </li>
          ))
        }
      </ul>
      <button onClick={handle}> Clear </button>
      <button onClick={() => setnData([])}> Clear </button>

    </div>
  );
};

export default Data;
