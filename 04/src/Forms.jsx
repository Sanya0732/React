import React,{useState} from 'react'

const Forms = () => {
    const[username,setUser]=useState('');
    const[password,setPassword]=useState('');
    const[email,setEmail]=useState('');

    const handleSubmit =(e)=>{
     console.log("username : ", username);
     console.log("password : ", password);
     console.log("email : ", email);

    }
  return (
    <form onSubmit={handleSubmit}>
         <div>
         <label>Username:</label>
         <input type='text' value={username} onChange={(e) => setUser(e.target.ariaValueMin)}/>

         <label>Password</label>
         <input type='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>

         <label>Email:</label>
         <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
         <button type='submit'>Submit</button>
        </div>
    </form>

  )
}

export default Forms