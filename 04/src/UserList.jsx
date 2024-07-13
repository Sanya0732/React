import React,{useState,useEffect} from 'react'

const UserList = () => {
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(response=>response.json())
       .then(data=>{
        setData(data);
        setLoading(false);
       })
       .catch(error =>{
        console.log("error",error);
        setLoading(false);
       });
    },[]);
    if(loading)return<p>loading</p>;
  return (
    <div>UserList
        <h3>Data Fetching</h3>
        <ul>
            {data.map(item =>(
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    </div>
   
  )
}

export default UserList