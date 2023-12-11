import { Skeleton, Stack ,Box,Avatar,Typography} from '@mui/material'
import React, { useEffect, useState } from 'react'
import pic1 from '../Assests/pic1.jpg'

const SkeletonMui = () => {
    const[loading,setLoading]= useState(true)

    useEffect(()=>{
        setTimeout(()=>{
           setLoading(false)
        },3000)
    },[])
  return (
    // <Stack spacing={1} width='250px' m={5}>
    //   <Skeleton />
    //   <Skeleton variant='circular' width={40} height={40} />
    //   <Skeleton variant='rectangular' width={220} height={100} animation='wave' />
    // </Stack>
    <Box sx={{width:'250px'}} m={2}>
        {
            loading ? (
                <Skeleton variant='rectangular' width={256} height={144} animation="wave" />
            ):(
                <img src={pic1} alt='Skeleton' width={256} height={144}  />
            )
        }
        <Stack direction='row' spacing={1} sx={{width:'100%',marginTop:'12px',alignItems:'center'}} >
            {
                loading ? (
                    <Skeleton
                      variant='circular'
                      width={40}
                      height={40}
                      animation='wave'
                    />
                ):
                (
                    <Avatar>V</Avatar>

                )
            }
            <Stack sx={{width:'80%'}}>
                {
                    loading?(
                        <>
                           <Typography variant='body1'>
                               <Skeleton variant='text' width='100%' animation='wave'/>
                           </Typography>
                           <Typography variant='body2'>
                               <Skeleton variant='text' width='100%' animation='wave'/>
                           </Typography>
                        </>
                    ): (
                        <>
                          <Typography variant='body1'>React MUI Tutorial</Typography>
                        </>
                    )
                }

            </Stack>

        </Stack>
    </Box>

  )
}

export default SkeletonMui