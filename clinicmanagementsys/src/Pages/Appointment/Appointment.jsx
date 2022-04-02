import { Button, Grid, InputLabel } from '@mui/material';
import React, { useEffect, useState } from 'react';
import GetComponents from '../../Components/CommonComponent';
import { doctorList, timeList } from '../../CommonConstants/Constants';
import { createAppointment, getAllAppointment } from '../../APICalls/APICall';
import moment from 'moment';

const Appointment = () => {
  const headingList = [
    {
      label: 'Doctor Name',
      name: 'doctorName',
      type: 'dropDown',
      options: doctorList,
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
      options: [],
    },
  ];
  const [appointmentDetail, updateAppointmentDetail] = useState({});
  const [appointmentSlots, updateAppointmentSlots] = useState(timeList);
  useEffect(() => {
    getAllAppointment().then((resp) => {
      const filledSlots = resp.map((ele) => ele.appointmentTime);
      const finalSlots = appointmentSlots.filter((ele) => !filledSlots.includes(ele.value));
      updateAppointmentSlots(finalSlots);
    });
  }, []);
  const bookAppointment = async () => {
    const userDetail = sessionStorage.getItem('userDetail');
    console.log('appointmentDetail', appointmentDetail);
    console.log('userDetail', JSON.parse(userDetail));

    await createAppointment({
      ...appointmentDetail,
      ...JSON.parse(userDetail),
      appointmentDate: moment(appointmentDetail.appointmentDate).format('DD-MM-YYYY'),
    });
    updateAppointmentDetail({});
  };
  const handleOnChange = (event) => {
    if (!event.target) {
      updateAppointmentDetail({ ...appointmentDetail, appointmentDate: event });
    } else if (!event.target.id) {
      updateAppointmentDetail({ ...appointmentDetail, [event.target.name]: event.target.value });
    } else {
      updateAppointmentDetail({ ...appointmentDetail, [event.target.id]: event.target.value });
    }
  };
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
                onChange={handleOnChange}
                options={fieldDetail?.name === 'appointmentTime' ? appointmentSlots : fieldDetail?.options}
                value={appointmentDetail[fieldDetail?.name]}
              />
            </Grid>
          );
        })}
        <Grid item xs={12}>
          <center>
            <Button variant="outlined">Cancel</Button>&nbsp;
            <Button variant="contained" onClick={bookAppointment}>
              Book Appointment
            </Button>
          </center>
        </Grid>
      </Grid>
    </div>
  );
};

export default Appointment;
