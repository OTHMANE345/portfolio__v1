import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import Navbar from './Navbar/Navbar';
import Home from './home/home';
import Recedencies from './Recedencies/Recedencies';
import Contact from './Contact/contact';


export default function DefaultLayout() {
    // const {user, token} = useStateContext()

    // if(!token){
    //     return <Navigate to="/login"/>
    // }
  return (
    <>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>   
 <Navbar/>
<Home/> 
<Recedencies/>
<Contact/>


<Outlet/>
</>
  )
}
