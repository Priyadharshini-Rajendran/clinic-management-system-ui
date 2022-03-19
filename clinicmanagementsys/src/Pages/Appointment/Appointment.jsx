import { Button, Grid, InputLabel } from '@mui/material';
import React from 'react';
import GetComponents from '../../Components/CommonComponent';
const headingList = [
  {
    label: 'Doctor Name',
    name: 'doctorName',
    type: 'text',
  },
  {
    label: 'Appointment Date',
    name: 'appointmentDate',
    type: 'date',
  },
  {
    label: 'Appointment Time',
    name: 'appointmentTime',
    type: 'dropDown',
    options: [
      { id: '12:30', value: '12:30' },
      { id: '13:00', value: '13:00' },
      { id: '13:30', value: '13:30' },
    ],
  },
];
const Appointment = () => {
  return (
    <div style={{ padding: '10px' }}>
      <p className="page-heading">Book Appointment</p>

      <Grid container spacing={2}>
        {headingList.map((fieldDetail, index) => {
          return (
            <Grid item xs={4} key={index}>
              <InputLabel id={fieldDetail?.name} className="PatientRegistration-heading">
                {fieldDetail?.label}
              </InputLabel>
              <GetComponents
                name={fieldDetail?.name}
                type={fieldDetail.type}
                disablePast
                onChange={(event) => {
                  console.log('event', event);
                }}
                options={fieldDetail?.options}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <center>
            <Button variant="outlined">Cancel</Button>&nbsp;
            <Button variant="contained">Book Appointment</Button>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default Appointment;
