import { Paper, TextField, InputLabel, Button } from '@mui/material';
import React from 'react';
import './Login.css';
const Login = () => {
  return (
    <div className="login-root ">
      <Paper className="login-paper-root">
        <center>
          <p className="login-heading">Login</p>
        </center>
        <InputLabel id="user-id" className="PatientRegistration-heading">
          User Id
        </InputLabel>
        <TextField />
        <InputLabel id="user-id" className="PatientRegistration-heading">
          Password
        </InputLabel>
        <TextField type="password" />
        <br />
        <Button variant="contained">Login</Button>
      </Paper>
    </div>
  );
};

export default Login;
