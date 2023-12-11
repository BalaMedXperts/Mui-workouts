import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const TextFieldMui = () => {
    const[value,setValue]=useState("")
  return (
    
        <Stack spacing={4} m={3}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' 
                value={value}
                error={!value}
                onChange={(e)=>setValue(e.target.value)}
                required
                size='small'
                type='password'
                 color='secondary' 
                 helperText={!value ? 'Required' : 'Do not Share your password with anyone'}
                 />
                 <TextField label='Read Only' InputProps={{readOnly:true}} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} />
                <TextField label='Weight' InputProps={{endAdornment:<InputAdornment position='end'>kg</InputAdornment>}} />
            </Stack>
            
           
           
        </Stack>
    
  )
}

export default TextFieldMui