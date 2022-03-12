import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PatientRegistration from './Pages/PatientRegistration/PatientRegistration';
import UserMaintenance from './Pages/UserMaintenance/UserMaintenance';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<PatientRegistration />} />
        <Route path="/usermaintenance" element={<UserMaintenance />} />
      </Routes>
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
