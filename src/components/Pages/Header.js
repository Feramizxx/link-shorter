import React from 'react'
import Navbar from './Navbar';
import HeaderMain from './Header-main';



const  Header=(props)=> {

  return (
    <div>
        <Navbar/>
        <HeaderMain  setClasses={props.setClasses}/>
    </div>
  )
}
export default Header;
