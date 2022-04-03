import React from "react";
import {
  Box,
  Typography,
  AppBar,
  useScrollTrigger,
  CssBaseline,
  Toolbar,
  Tooltip,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useNavigate } from "react-router-dom";
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
  let userDetails = sessionStorage.getItem("userDetail");
  userDetails = JSON.parse(userDetails);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      {/* <ElevationScroll {...props}> */}
      <AppBar position="static" elevation={6}>
        <h2
          style={{
            display: "flex",
            flex: 1,
            marginLeft: "20px",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: "30px",
          }}
        >
          <span>Clinic </span>
          <div style={{alignItems:"center",display:"flex"}}>
            <AccountCircleIcon/>&nbsp;
            <span style={{fontSize:"12px"}}>
              {userDetails?.name ||
                userDetails?.firstName + " " + userDetails?.lastName}
            </span>
            &nbsp;
            <Tooltip title="Logout" style={{ cursor: "pointer" }}>
              <ExitToAppIcon
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                }}
              />
            </Tooltip>
          </div>
        </h2>
      </AppBar>
      {/* </ElevationScroll> */}
    </Box>
  );
};

export default CustomAppBar;
