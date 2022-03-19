import React from 'react';
import './PatientRegistration.css';
import GetComponents from '../../Components/CommonComponent';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';

const fieldDetails = [
  {
    label: 'First Name',
    name: 'firstName',
    defaultValue: '',
    type: 'text',
    required: true,
  },
  {
    label: 'Last Name',
    name: 'lastName',
    defaultValue: '',
    type: 'text',
    required: true,
  },
  {
    label: 'Gender',
    name: 'gender',
    type: 'dropDown',
    required: true,
    defaultValue: 1,
    option: [
      {
        id: 1,
        value: 'Male',
      },
      {
        id: 2,
        value: 'Female',
      },
      {
        id: 3,
        value: 'Other',
      },
    ],
  },
  {
    label: 'Age',
    name: 'age',
    defaultValue: '',
    type: 'number',
    required: true,
  },
  {
    label: 'DOB',
    name: 'dob',
    defaultValue: '',
    type: 'date',
    required: false,
  },

  {
    label: 'Mobile Number',
    name: 'mobileNumber',
    defaultValue: '',
    type: 'number',
    required: true,
    length: 10,
  },
  {
    label: 'Mail Id',
    name: 'mailId',
    defaultValue: '',
    type: 'text',
    required: false,
  },
  {
    label: 'Address',
    name: 'address',
    defaultValue: '',
    type: 'multiLineText',
    required: false,
  },
];

const PatientRegistration = () => {
  return (
    <div className="PatientRegistration-root">
      <p className="page-heading">Patient Registration</p>

      <Grid container spacing={2}>
        {fieldDetails.map((fieldDetail, index) => {
          return (
            <Grid item xs={4} key={index}>
              <InputLabel id={fieldDetail?.name} className="PatientRegistration-heading">
                {fieldDetail?.label}
              </InputLabel>
              <GetComponents
                type={fieldDetail?.type}
                label={fieldDetail?.label}
                name={fieldDetail?.name}
                options={fieldDetail?.option}
                defaultValue={fieldDetail?.defaultValue}
              />
            </Grid>
          );
        })}
      </Grid>
      <br />
      <center>
        <Button variant="outlined">Clear</Button>
        &nbsp;
        <Button variant="contained">Save</Button>
      </center>
    </div>
  );
};

export default PatientRegistration;
