
import classes from './Main.module.css'
import React,{useEffect, useState,useRef} from 'react'
import Button from '../UI/Button'
import axios from 'axios'
import LinkList from './LinkList'
import Advanced from './Advanced'

// import records from '/images/icon-detailed-records.svg';

//https://api.shrtco.de/v2/shorten?url=youtube.com

  const Main=() => {
  const [link, setLink] = useState('')
  // const [shortLink, setShortLink] = useState('')
  const [linkList,setlinkList]=useState([])


    


  useEffect(()=>{
    fetchApiHandler()   
  },[])


    const fetchApiHandler = async ()=>{
    const response = await axios( `https://api.shrtco.de/v2/shorten?url=${link}`)
    const data = await response.data.result.short_link;
   
    // setShortLink([{data: data}])
    console.log(data)
    setlinkList([...linkList, {data:data, name: link, id: link}])
    console.log(linkList)
    setLink('')
   
   }
  






  const inpuContextHandler=(event)=>{
    setLink(event.target.value)
     
  }
 


  





  const inputSubmitHandler=(e)=>{
    e.preventDefault();
  }
  

  


  return (

    <>
    <div className={classes['main-container']}>
      <div className={classes['form-container']}>
        <form className={classes.form} onSubmit={inputSubmitHandler}>
          <input type='font-bold text'
            
           value={link}
           onChange={inpuContextHandler}
           placeholder='Shorten a link here...'/>
          <Button type={'submit'} textContext={'Shorten'} onClick={fetchApiHandler} />
        </form>
      </div>
      <div className={classes['link-container']}>

    <ul className={classes['link-menu']}>
       




      <LinkList   linkList={linkList} link={link}/>
       </ul>
      </div>
     
    </div>




    </>
  )
}
export default Main;
