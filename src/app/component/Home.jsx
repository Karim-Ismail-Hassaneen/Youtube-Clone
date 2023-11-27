"use client";
import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import { Box, Stack, Typography } from '@mui/material'
import { Apifetch } from '../utils/FetchDataFromApi';
import Videos from './Videos';

const Home = () => {
    const [selectedCategory,setselectedCategroy]=useState('New')
    const [videos,setvideos]=useState([])
   
    const getdata = async()=>{
        const data = await Apifetch(`search?part=snippet&q=${selectedCategory}`)
        // console.log(data);
        setvideos(data.items);
    }

    useEffect(()=>{
           getdata();
    },[selectedCategory])



  return (
    <Stack sx={{flexDirection:{xs:"column",md:"row"}}}>
        <Box
         sx={{height:{xs:"auto",md:"92vh"},borderRight:"1px solid #3d3d3d", px: { sx: 0, md: 2} }}
        >
        <Sidebar selectedCategory={selectedCategory} setselectedCategroy={setselectedCategroy}/>
        <Typography style={{color:"white"}}>
            Copyright Free Created By KM.INC 2023
        </Typography>
        </Box>
        <Box p={2} sx={{overflowY:"auto",height:"90vh",flex:2}}>
       <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
          {selectedCategory} <span style={{color:"$F31503"}}>Videos</span>
       </Typography>
        <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}

export default Home;