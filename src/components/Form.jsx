import React from 'react'
import { useState, useEffect } from 'react'

function Form(props) {
 
   const [formData, setFormData] = useState({
    searchTerm: ""
});
    
   const handleChange = (event)=>{
        setFormData({...formData, [event.target.name]: event.target.value})
   };
//wheninput value is changed


   const handleSubmit= (event)=>{
    event.preventDefault()
    props.movieSearch(formData.searchTerm)
   };
//when submit button is pressed, store value in input



     return (
   <div>
        <form onSubmit={handleSubmit}>
         <input 
         type="text"
          name="searchTerm" 
          onChange={handleChange} 
          value={formData.searchTerm} 
          />
         
         <input type="submit" value="submit"/>
        </form>
   </div>
  )
}

export default Form