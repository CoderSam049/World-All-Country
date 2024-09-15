import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import { Themecontext } from './countryhelp';


export default function App() {
  const [dark, setIsDark] = useState(JSON.parse(localStorage.getItem("isdark")));  
  return (
    <Themecontext.Provider value={[dark, setIsDark] }>
    <Header></Header>
    <Outlet></Outlet>
    

    </Themecontext.Provider>
  )
}
