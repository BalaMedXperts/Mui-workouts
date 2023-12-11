import { Box, Grid } from '@mui/material'
import React from 'react'

const GridMui = () => {
  return (
    <div>
        <Grid container my={4} rowSpacing={4} columnSpacing={2}>
            
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Item 1</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Item 2</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
               <Box bgcolor='primary.light' p={2}>Item 3</Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box bgcolor='primary.light' p={2}>Item 4</Box>

            </Grid>

        </Grid>
    </div>
  )
}

export default GridMui