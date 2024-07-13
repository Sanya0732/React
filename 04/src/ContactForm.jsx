import React,{useState} from 'react'

const ContactForm = () => {
    const[name,setName]=useState('');
    const[message,setMessage]=useState('');
    const[phoneNumber,setphoneNumber]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("name",name);
        console.log("message",message);
        console.log("Phone Number: ",phoneNumber);
    }

  return (
   <form onSubmit={handleSubmit}>
    <div>
        <label>Name: </label>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
   <br/>
   <br/>

        <label>Message: </label>
        <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)}/>
        <br/>
        <br/>

        <label>Phone: </label>
        <input type='number' value={phoneNumber} onChange={(e)=>setphoneNumber(e.target.value)}/>
        <br/>
        <br/>
    <button type='submit'>Submit</button>
    </div>

   </form>
)
}

export default ContactForm