
import AreaInputField from "./AreaInputField";
import ApiFetch from './ApiFetch.js';
import React, { useState} from "react"
function FilterLogic({users}) {
   
    const[word, setWord]= useState('')
    
    const HandleClick= (event) =>{
       setWord(event.target.value); 
    };
    const Submithandler= (event)=> {
        event.preventDefault();
        const Data={word} 
        setWord('');
    };
    
    
    return(
        <div>
            <AreaInputField onHandleClick={HandleClick} Submithandler={Submithandler} Word={word}></AreaInputField>
            <ApiFetch users={users} Word={word} /> 
            
       
        
       
        
        </div>
    );
   
    }
    
export default FilterLogic;