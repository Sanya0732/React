import React, { useState } from 'react'

const Form = () => {
    // const[name,setName] = useState("")
    // const[email,setEmail] = useState("")
    // const[password,setPassword] = useState("")
// using only one state instead of multiple states
const[formData,setFormData]=useState({
  name:" ",
  email:" ",
  password:" "
})

const handleInput = (e) => {
  // console.log(e.target.name);
  const{name,value} = e.target;
  setFormData({
   ...formData, [name]:value
  })

}
//     const handleName =(e)=>{
//         console.log(e.target.value);
//         setName(e.target.value);
//     }
//     const handleEmail =(e)=>{
//       console.log(e.target.value);
//       setEmail(e.target.value);
//   }
//   const handlePassword =(e)=>{
//     console.log(e.target.value);
//     setPassword(e.target.value);
// }
const handleSubmit = (e) =>{
  e.preventDefault();
}
    
  return (
    <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type='text' name='name' value={formData.name} onChange={handleInput}/>
        </label>
        <br/>
        <br/>

        <label>
            Email:
            <input type='text' name='email' value={formData.email} onChange={handleInput}/>
        </label>
        <br/>
        <br/>

        <label>
            password:
            <input type='password' name='password' value={formData.password} onChange={handleInput}/>
        </label>
        <br/>
        <br/>
      <button type='onSumbit' >Submit</button>
    </form>
  )
}

export default Form