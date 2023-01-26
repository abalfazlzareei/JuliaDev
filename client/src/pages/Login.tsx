import React from 'react'
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate} from "react-router-dom";



function Login() {

  const navigateTo = useNavigate();

  function handleSubmit(){
    navigateTo("/home" );
  }

  return (
    <div className='flex justify-center items-center h-screen flex-row'>
       <form onSubmit={handleSubmit} className="z-40 justify-center justify-items-center mb-4">
                      <TextField
                        margin="normal"
                        variant="filled"
                        required
                        id="name"
                        label="Username"
                        name="name"
                        autoComplete="name"
                        sx={{ width: "90%", borderRadius: '40px', color: 'primary.main', backgroundColor: 'primary.contrastText' }}
                        autoFocus
                      />
                      <TextField
                        margin="normal"
                        variant="filled"
                        required
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        sx={{ width: "90%", borderRadius: '40px',color: 'white', backgroundColor: 'white' }}
                      />

                    <Button type="submit" variant="contained"  sx={{ width: "90%", mt:2,  height: 50, backgroundColor:"darkblue" }}>Log in</Button>

                        </form>
    </div>
  )
}

export default Login