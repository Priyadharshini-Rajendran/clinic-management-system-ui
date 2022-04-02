import { Paper, TextField, InputLabel, Button } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { users } from '../../CommonConstants/Constants';
import { getUser } from '../../APICalls/APICall';
const Login = (props) => {
  const history = useNavigate();
  console.log(props);
  const [userName, updateUserName] = useState('');
  const handleLogin = async () => {
    if (userName.includes('PAT')) {
      const userDetail = await getUser(userName);
      sessionStorage.setItem('userDetail', JSON.stringify(userDetail));
      history('/clinic');
    } else {
      const selectedUsers = users.filter((ele) => ele.id === userName);
      sessionStorage.setItem('userDetail', JSON.stringify(selectedUsers?.[0]));
      history('/clinic');
    }
  };
  return (
    <div className="login-root ">
      <Paper className="login-paper-root">
        <center>
          <p className="login-heading">Login</p>
        </center>
        <InputLabel id="user-id" className="PatientRegistration-heading">
          User Id
        </InputLabel>
        <TextField
          value={userName}
          onChange={(event) => {
            updateUserName(event.target.value);
          }}
        />
        {/* <InputLabel id="user-id" className="PatientRegistration-heading">
          Password
        </InputLabel>
        <TextField type="password" /> */}
        <br />
        <Button variant="contained" onClick={handleLogin}>
          Login
        </Button>
      </Paper>
    </div>
  );
};

export default Login;
