import { Paper, Grid, Stack, Divider, TextField, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import './Billing.css';
import Avatar from '@mui/material/Avatar';
import AlarmIcon from '@mui/icons-material/Alarm';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import OppositeContentTimeline from '../../Components/Timeline';
import { getAllAppointment, updateAppointment } from '../../APICalls/APICall';
const Billing = () => {
  const [appointmentList, updateAppointmentList] = useState([]);
  const [selectedAppointment, updateSelectedAppointment] = useState({});
  useEffect(() => {
    refresh();
  }, []);
  const refresh = () => {
    getAllAppointment().then((resp) => {
      updateSelectedAppointment(resp?.length > 0 ? resp[0] : {});
      updateAppointmentList(resp);
    });
  };
  const handlePay = async () => {
    await updateAppointment(selectedAppointment?._id, { ...selectedAppointment, isPaymentDone: true });
    refresh();
  };
  const handleCancel = () => {
    refresh();
  };
  return (
    <div className="doctorHomePage-appointment-root">
      <p className="page-heading">Billing</p>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div style={{ overflowY: 'scroll', maxHeight: '78vh', paddingRight: '5px' }}>
            {appointmentList.map((ele, index) => {
              const randomNumber = index % 10;
              return (
                <Paper
                  elevation={1}
                  className="doctorHomePage-appointment-list-root"
                  style={{ borderColor: getColor(randomNumber), background: ele?._id === selectedAppointment?._id ? '#c2c2c2' : '' }}
                  onClick={() => {
                    updateSelectedAppointment(ele);
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar style={{ backgroundColor: getColor(randomNumber), color: '#000' }}>
                      {ele?.firstName?.charAt(0)?.toUpperCase()}
                      {ele?.lastName?.charAt(0)?.toUpperCase()}
                    </Avatar>
                    <div className="doctorHomePage-appointment-list-details">
                      <p>
                        {ele?.firstName} {ele?.lastName}
                      </p>
                      <p className="doctorHomePage-appointment-list-details-small">
                        <LocalPhoneIcon fontSize="small" />
                        &nbsp;{ele?.mobileNumber}
                      </p>
                      <p className="doctorHomePage-appointment-list-details-small">
                        <AlarmIcon fontSize="small" />
                        &nbsp;{ele?.appointmentTime}
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
              <p>
                {selectedAppointment?.firstName}&nbsp;
                {selectedAppointment?.lastName}
              </p>
            </Grid>
            <Grid item xs={4}>
              <b>Age</b>
              <p>{selectedAppointment?.age}</p>
            </Grid>
            <Grid item xs={4}>
              <b>Date of Birth</b>
              <p>{selectedAppointment.dob}</p>
            </Grid>
            <Grid item xs={4}>
              <b>Gender</b>
              <p>{selectedAppointment?.gender}</p>
            </Grid>
            <Grid item xs={4}>
              <b>Mobile No</b>
              <p>{selectedAppointment?.mobileNumber}</p>
            </Grid>
            <Grid item xs={4}>
              <b>Mail Id</b>
              <p>{selectedAppointment?.mailId}</p>
            </Grid>
            <Grid item xs={12}>
              <b>Address</b>
              <p>{selectedAppointment?.address}</p>
            </Grid>
            <Grid item xs={12}>
              <Divider />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={selectedAppointment?.payedAmount || ''}
                fullWidth
                disabled={selectedAppointment?.isPaymentDone}
                placeholder="Enter amount"
                type="number"
                onChange={(event) => {
                  updateSelectedAppointment({ ...selectedAppointment, payedAmount: event.target.value });
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <center>
                <Button variant="outlined" onClick={handleCancel}>
                  Cancel
                </Button>
                &nbsp;
                <Button variant="contained" onClick={handlePay} disabled={selectedAppointment?.isPaymentDone}>
                  Pay
                </Button>
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

export default Billing;
