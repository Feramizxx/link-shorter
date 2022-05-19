import './App.css';
import React,{useState} from 'react';
import Main from './components/Pages/Main';
import Header from './components/Pages/Header';
import Advanced from './components/Pages/Advanced';


const  App=()=> {
  const [classes,setClasses]=useState([])
  return (
    <div className="App">
     <Header setClasses={setClasses} classes={classes} />
     <Main  setClasses={setClasses}  classes={classes}/>
   
    </div>
  );
}

export default App;
