import DoctorHomePage from '../Pages/DoctorHomePage/DoctorHomePage';
import Appointment from '../Pages/Appointment/Appointment';
import PatientRegistration from '../Pages/PatientRegistration/PatientRegistration';
import UserMaintenance from '../Pages/UserMaintenance/UserMaintenance';
import Billing from '../Pages/Billing/Billing';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AlarmAddIcon from '@mui/icons-material/AlarmAdd';
export const doctorList = [
  {
    id: 'DOC01',
    value: 'Doctor',
  },
];
export const timeList = [
  { id: '24:00', value: '24:00' },
  { id: '24:30', value: '24:30' },
  { id: '01:00', value: '01:00' },
  { id: '01:30', value: '01:30' },
  { id: '02:00', value: '02:00' },
  { id: '02:30', value: '02:30' },
  { id: '03:00', value: '03:00' },
  { id: '03:30', value: '03:30' },
  { id: '04:00', value: '04:00' },
  { id: '04:30', value: '04:30' },
  { id: '05:00', value: '05:00' },
  { id: '05:30', value: '05:30' },
  { id: '06:00', value: '06:00' },
  { id: '06:30', value: '06:30' },
  { id: '07:00', value: '07:00' },
  { id: '07:30', value: '07:30' },
  { id: '08:00', value: '08:00' },
  { id: '08:30', value: '08:30' },
  { id: '09:00', value: '09:00' },
  { id: '09:30', value: '09:30' },
  { id: '10:00', value: '10:00' },
  { id: '10:30', value: '10:30' },
  { id: '11:00', value: '11:00' },
  { id: '11:30', value: '11:30' },
  { id: '12:00', value: '12:00' },
  { id: '12:30', value: '12:30' },
  { id: '13:00', value: '13:00' },
  { id: '13:30', value: '13:30' },
  { id: '14:00', value: '14:00' },
  { id: '14:30', value: '14:30' },
  { id: '15:00', value: '15:00' },
  { id: '15:30', value: '15:30' },
  { id: '16:00', value: '16:00' },
  { id: '16:30', value: '16:30' },
  { id: '17:00', value: '17:00' },
  { id: '17:30', value: '17:30' },
  { id: '18:00', value: '18:00' },
  { id: '18:30', value: '18:30' },
  { id: '19:00', value: '19:00' },
  { id: '19:30', value: '19:30' },
  { id: '20:00', value: '20:00' },
  { id: '20:30', value: '20:30' },
  { id: '21:00', value: '21:00' },
  { id: '21:30', value: '21:30' },
  { id: '22:00', value: '22:00' },
  { id: '22:30', value: '22:30' },
  { id: '23:00', value: '23:00' },
  { id: '23:30', value: '23:30' },
];

export const users = [
  {
    name: 'Doctor',
    id: 'DOC01',
  },
  { name: 'Receptionist', id: 'REP01' },
  { name: 'Biller', id: 'BIL01' },
];

export const permissions = {
  DOC01: ['DOC_HOME'],
  REP01: ['BILLING', 'PATIENT_LIST', 'REGISTER_PATIENT', 'APPOINTMENT'],
  BIL01: ['BILLING'],
};

export const permissionMapping = {
  DOC_HOME: 'doctorhome',
  BILLING: 'billing',
  PATIENT_LIST: 'usermaintenance',
  REGISTER_PATIENT: 'registration',
  APPOINTMENT: 'appointment',
};

export const getRouteComponents = (value) => {
  switch (value) {
    case 'doctorhome':
      return <DoctorHomePage />;
    case 'billing':
      return <Billing />;
    case 'usermaintenance':
      return <UserMaintenance />;
    case 'registration':
      return <PatientRegistration />;
    case 'appointment':
      return <Appointment />;
    default:
      return <div>Invalid Route</div>;
  }
};

export const getSpeedDialDetails = (value) => {
  switch (value) {
    case 'doctorhome':
      return { icon: <VaccinesIcon />, name: 'Doctor Home' };
    case 'billing':
      return { icon: <CurrencyRupeeIcon />, name: 'Billing' };
    case 'usermaintenance':
      return { icon: <GroupAddIcon />, name: 'Add/Edit Patient' };
    case 'registration':
      return { icon: <HowToRegIcon />, name: 'Add Patient' };
    case 'appointment':
      return { icon: <AlarmAddIcon />, name: 'Book Appointment' };
    default:
      return <div>Invalid Route</div>;
  }
};
