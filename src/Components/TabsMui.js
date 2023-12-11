import { Box, Tab } from '@mui/material'
import React, { useState } from 'react'
import {TabContext, TabList, TabPanel} from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite'


const TabsMui = () => {
    const[value,setValue]=useState('1')
  return (
    <Box>
      <TabContext value={value}>
          <Box sx={{borderBottom:1,borderColor:"divider",width:"300px"}}>
            <TabList aria-label='Tabs example' 
            onChange={(event,newValue)=>setValue(newValue)}
            textColor='secondary'
            indicatorColor='secondary'
            centered
            variant='scrollable'
            scrollButtons='auto'
            >
                <Tab label='Tab One' value='1' icon={<FavoriteIcon />} iconPosition='end'/>
                <Tab label='Tab Two' value='2'disabled />
                <Tab label='Tab Three' value='3' />
                <Tab label='Tab Four' value='4' />
                <Tab label='Tab Five' value='5' />
            </TabList>

          </Box>
          <TabPanel value='1'>Panel One</TabPanel>
          <TabPanel value='2'>Panel two</TabPanel>
          <TabPanel value='3'>Panel three</TabPanel>
          <TabPanel value='4'>Panel Four</TabPanel>
          <TabPanel value='5'>Panel Five</TabPanel>

      </TabContext>
    </Box>
  )
}

export default TabsMui