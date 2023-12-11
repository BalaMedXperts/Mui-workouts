import { Typography } from '@mui/material'
import React from 'react'

const TypographyMui = () => {
  return (
    <div>
        {/* Style and appearance of the text */}
        <Typography variant='h1'>H1 Heading </Typography>
        <Typography variant='h2'>H2 Heading </Typography>
        <Typography variant='h3'>H3 Heading </Typography>
        <Typography variant='h4' component='h1' gutterBottom>H4 Heading </Typography>
        <Typography variant='h5'>H5 Heading </Typography>
        <Typography variant='h6'>H6 Heading </Typography>
        <Typography variant='subtitle1'>Sub Title 1 </Typography>
        <Typography variant='subtitle2'>Sub Title 2</Typography>
        <Typography variant='body1'>The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element. </Typography>
        <Typography variant='body2'>The Typography component uses the variantMapping prop to associate a UI variant with a semantic element. It's important to realize that the style of a typography component is independent from the semantic underlying element.</Typography>

    </div>
  )
}

export default TypographyMui