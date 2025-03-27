'use client'
import { Box, Button, Input, Typography } from '@mui/material'
import React, { useState } from 'react'


const Email = () => {
    const [isValid, setIsValid] = useState(true)
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateEmail = (email : string) => {
    const isEmailValid = emailRegex.test(email);

    if(isEmailValid){
        setIsValid(true)
    }else{
        setIsValid(false)
    }
}
  return (
    <Box>
        <Input
            placeholder="Your email address..."
            type="email"
            required
            sx={{
                border:`1px solid ${isValid ? "#88c7ed" : "#ff5466"}`,
                borderRadius:"2rem",
                color: "#BBC7ED",
                width:"26.3125rem",
                padding:"0.5rem 1rem",
                marginRight:"1rem"
            }}
            onChange={(e) => {
                validateEmail(e.target.value)
            }}
        />
        

        <Button
            sx={{
                backgroundColor:"#4c7bf3",
                color:"white",
                borderRadius:"2rem",
                padding:"0.5rem 1rem",
                width:"200px",
                height:"3.5rem",
            }}
        >
            Notify Me!
        </Button>
        {!isValid && <Typography sx={{
            color:"#ff5466",
            fontSize:"0.75rem"
        }}>
            Please provide a valid email
        </Typography>}
    </Box>
  )
}

export default Email