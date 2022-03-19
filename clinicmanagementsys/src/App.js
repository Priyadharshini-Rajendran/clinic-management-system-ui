import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PatientRegistration from './Pages/PatientRegistration/PatientRegistration';
import UserMaintenance from './Pages/UserMaintenance/UserMaintenance';
import DoctorHomePage from './Pages/DoctorHomePage/DoctorHomePage';
import Appointment from './Pages/Appointment/Appointment';
import CustomAppBar from './Components/AppBar';
import Billing from './Pages/Billing/Billing';
import Login from './Pages/Login/Login';
import { Paper } from '@mui/material';
function App(props) {
  return (
    <div className="App">
      <CustomAppBar />
      {/* <Toolbar /> */}
      <main className="app-main ">
        <Paper elevation={2} style={{ padding: '0 20px' }}>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/registration" element={<PatientRegistration />} />
            <Route path="/usermaintenance" element={<UserMaintenance />} />
            <Route path="/doctorhome" element={<DoctorHomePage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </Paper>
      </main>
    </div>
  );
}

const Home = () => {
  return <div>Home</div>;
};
const About = () => {
  return <div>About</div>;
};
export default App;
