import React from 'react';
import { Box, Typography, AppBar, useScrollTrigger, CssBaseline, Toolbar, Tooltip } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';
function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const CustomAppBar = (props) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <AppBar position="static" elevation={6}>
        <h2 style={{ display: 'flex', flex: 1, marginLeft: '20px', justifyContent: 'space-between', alignItems: 'center', marginRight: '30px' }}>
          <span>Clinic Name</span>
          <Tooltip title="Logout" style={{ cursor: 'pointer' }}>
            <ExitToAppIcon
              onClick={() => {
                sessionStorage.clear();
                navigate('/');
              }}
            />
          </Tooltip>
        </h2>
      </AppBar>
      {/* </ElevationScroll> */}
    </Box>
  );
};

export default CustomAppBar;
