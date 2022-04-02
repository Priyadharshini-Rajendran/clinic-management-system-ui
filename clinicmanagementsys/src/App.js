import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import CustomAppBar from './Components/AppBar';
import Login from './Pages/Login/Login';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import { Paper, SpeedDial, SpeedDialAction } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import { permissions, permissionMapping, getRouteComponents, getSpeedDialDetails } from './CommonConstants/Constants';
function App(props) {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/clinic/*" element={<Home />} />
      </Routes>
    </div>
  );
}

const Home = () => {
  const [finalPermissionList, updatePermissionList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    let userDetails = sessionStorage.getItem('userDetail');
    userDetails = JSON.parse(userDetails);
    if (!userDetails) {
      navigate('/');
    } else {
      if (userDetails?.userId?.includes('PAT')) {
        updatePermissionList(['appointment']);
      } else {
        const userPermissions = permissions[userDetails?.id];
        updatePermissionList(userPermissions?.map((ele) => permissionMapping[ele]));
      }
      if (userDetails?.userId?.includes('PAT')) {
        navigate('/clinic/appointment');
      } else if (userDetails?.id?.includes('REP')) {
        navigate('/clinic/registration');
      } else if (userDetails?.id?.includes('BIL')) {
        navigate('/clinic/billing');
      } else if (userDetails?.id?.includes('DOC')) {
        navigate('/clinic/doctorhome');
      }
    }
  }, []);

  return (
    <Fragment>
      <CustomAppBar />
      <main className="app-main ">
        <Paper elevation={2} style={{ padding: '0 20px', borderRadius: '10px', minHeight: '80%' }}>
          <Routes>
            {finalPermissionList?.map((ele, index) => {
              return <Route path={`/${ele}`} element={getRouteComponents(ele)} key={index} />;
            })}
          </Routes>
        </Paper>
        <SpeedDial ariaLabel="SpeedDial basic example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />}>
          {finalPermissionList.map((ele) => {
            const actionDetail = getSpeedDialDetails(ele);
            return (
              <SpeedDialAction
                key={actionDetail.name}
                tooltipTitle={actionDetail.name}
                icon={actionDetail.icon}
                onClick={() => {
                  navigate(`/clinic/${ele}`);
                }}
              />
            );
          })}
        </SpeedDial>
      </main>
    </Fragment>
  );
};
const About = () => {
  return <div>About</div>;
};
export default App;
