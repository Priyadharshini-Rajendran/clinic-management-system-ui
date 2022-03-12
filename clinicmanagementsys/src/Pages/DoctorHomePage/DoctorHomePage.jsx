import { Paper, Grid, Stack, Divider, TextField, Button } from '@mui/material';
import React from 'react';
import './DoctorHomePage.css';
import Avatar from '@mui/material/Avatar';
import AlarmIcon from '@mui/icons-material/Alarm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OppositeContentTimeline from '../../Components/Timeline';
const DoctorHomePage = () => {
  return (
    <div className="doctorHomePage-appointment-root">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{ overflowY: 'scroll', maxHeight: '90vh', paddingRight: '5px' }}>
            {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map(() => {
              const randomNumber = Math.floor(Math.random() * 10 + 1);
              return (
                <Paper elevation={1} className="doctorHomePage-appointment-list-root" style={{ borderColor: getColor(randomNumber) }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar style={{ backgroundColor: getColor(randomNumber), color: '#000' }}>PR</Avatar>
                    <div className="doctorHomePage-appointment-list-details">
                      <p>Priyadharshini R</p>
                      <p className="doctorHomePage-appointment-list-details-small">
                        <LocalPhoneIcon fontSize="small" />
                        &nbsp;8940020941
                      </p>
                      <p className="doctorHomePage-appointment-list-details-small">
                        <AlarmIcon fontSize="small" />
                        &nbsp;12:30 AM
                      </p>
                    </div>
                  </Stack>
                </Paper>
              );
            })}
          </div>
        </Grid>
        <Grid item xs={8}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <b>Name</b>
              <p>Priyadharshini R</p>
            </Grid>
            <Grid item xs={4}>
              <b>Age</b>
              <p>80</p>
            </Grid>
            <Grid item xs={4}>
              <b>Date of Birth</b>
              <p>12-06-1960</p>
            </Grid>
            <Grid item xs={4}>
              <b>Gender</b>
              <p>Unknown</p>
            </Grid>
            <Grid item xs={4}>
              <b>Mobile No</b>
              <p>990909090909</p>
            </Grid>
            <Grid item xs={4}>
              <b>Mail Id</b>
              <p>alien@space.com</p>
            </Grid>
            <Grid item xs={12}>
              <b>Address</b>
              <p>Out of galaxy</p>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <OppositeContentTimeline />
            </Grid>

            <Grid item xs={12}>
              <TextField multiline minRows={5} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <center>
                <Button variant="outlined">Cancel</Button>&nbsp;
                <Button variant="contained">Save & Close Appointment</Button>
              </center>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

const getColor = (value) => {
  switch (value) {
    case 1:
      return '#C7D9F0';
    case 2:
      return '#B6D5F3';
    case 3:
      return '#FDF9DC';
    case 4:
      return '#D2EEFD';
    case 5:
      return '#ABDCE0';
    case 6:
      return '#F6E6E6';
    case 7:
      return '#E6FCFC';
    case 8:
      return '#D8E9F8';
    case 9:
      return '#DCF5E8';
    case 10:
      return '#C4E6C1';
    default:
      return '#EEF6F7';
  }
};

export default DoctorHomePage;
