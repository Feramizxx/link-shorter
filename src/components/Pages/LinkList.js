import React, { createElement } from 'react';
import Button from '../UI/Button';
import {useState, useEffect} from 'react';


//  
 const LinkList=(props)=> {

  const [button,setButton]= useState(false)
  // our li  props.onInputValue
 





  const ButtonFunc=(data)=>{
    navigator.clipboard.writeText(data)
    setButton(true)
    
  }





  
   return (
  <>
   {

props.linkList.map((item)=>{
 



  return(<li key={item.name}><span>{item.name}</span><div>{item.data}</div>  <Button  onClick={()=>ButtonFunc(item.data) }  textContext={"Copy"}  /></li>)


})



}
  </>
  )
}

export default LinkList;
