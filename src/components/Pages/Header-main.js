import React from 'react'
import Button from '../UI/Button';
import  classes from '../Pages/Headermain.module.css'
const  HeaderMain=(props)=> {

  

  const  inputPointer=()=>{
    props.setClasses('point')
    
  }
  return (

    <>
    <div className={classes['container-div']}>
        <div className={classes['text-container']}>
        <h1>More Than just Shorter Links</h1>
        <h6>Build your brand's recognition and get detailed insights on how your links are performing </h6>
        <Button onClick={inputPointer} textContext={'Get Started'}/>
        </div>
        <div className={classes['image-container']}>
        <img className={classes.image} src='/images/desktop.svg' alt=''/>
        </div>
    </div>
  
    </>
  )
}


export default HeaderMain;
