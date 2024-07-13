import React from 'react';
import ReactDOM from 'react-dom/client';
import Product from './Product';
import Toggle from './Toggle';
import Profile from './Profile';
import UserList from './UserList';
import Forms from './Forms';
import ContactForm from './ContactForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Product name="sanya" price="150"/> */}
    {/* <Toggle/> */}
    {/* <Profile name="Sanya" age="19" location="India"/>
    <Profile name="abc" age="18" location="xyz"/> */}
    {/* <UserList/> */}
    {/* <Forms/> */}
    <ContactForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
