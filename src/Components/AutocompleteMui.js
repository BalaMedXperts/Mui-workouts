import React, { useState } from 'react'
import  {Stack, Autocomplete, TextField } from "@mui/material"

// type skill={
//     id:Number,
//     label:String

// }
const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
]  

const skills=['HTMl','CSS','Javascript' , 'Typescript', 'React']

const skillsOptions=skills.map((skill,index)=>({
    id:index+1,
    label:skill
}))
const AutocompleteMui = () => {
    const[value,setValue]=useState(null)
    const[skill,setSkill]=useState(null)
    console.log({skill})
  return (
     <Stack spacing={2} width={'250px'}>
    
        <Autocomplete  options={skills}
         renderInput={(params)=><TextField {...params} label='skills' margin='normal' 
          variant='outlined'
         />} 
         value={value}
         onChange={(event,newValue)=>setValue(newValue)}
         freeSolo
         />

       <Autocomplete  options={top100Films}
         renderInput={(params)=><TextField {...params} label='skills'  />} 
        //  value={value}
         onChange={(event,newValue)=>setSkill(newValue)}
         freeSolo
         multiple
         limitTags={2}
         />

         
   
       
        
        
     </Stack>
  )
}

export default AutocompleteMui