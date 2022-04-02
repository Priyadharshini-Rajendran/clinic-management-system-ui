import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './UserMaintenance.css';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import { IconButton, Dialog, DialogTitle, DialogContent, InputLabel, Grid, DialogActions, Button, Tooltip } from '@mui/material';
import GetComponents from '../../Components/CommonComponent';
import { getAllUser, editUser } from '../../APICalls/APICall';
import moment from 'moment';
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
const UserMaintenance = () => {
  const [userList, updateUserList] = useState([]);
  useEffect(() => {
    getAllUser().then((resp) => {
      updateUserList(
        resp.map((ele, index) => {
          return { ...ele, id: index + 1 };
        })
      );
    });
  }, []);
  const columns = [
    { field: 'id', headerName: 'User Id', width: '100' },
    { field: 'firstName', headerName: 'First Name', width: '200' },
    { field: 'lastName', headerName: 'Last Name', width: '200' },
    { field: 'age', headerName: 'Age', width: '80' },
    { field: 'dob', headerName: 'DOB', width: '100' },
    { field: 'gender', headerName: 'Gender', width: '100' },
    { field: 'mobileNumber', headerName: 'Mobile Number', width: '150' },
    { field: 'mailId', headerName: 'Mail Id', width: '150' },
    { field: 'address', headerName: 'Address', width: '150' },
    {
      field: 'action',
      width: '150',
      headerName: 'Action',
      type: 'actions',
      getActions: (details) => {
        return [
          <Tooltip title="Edit User">
            <IconButton onClick={() => handleEdit(details)}>
              <EditIcon />
            </IconButton>
          </Tooltip>,
        ];
      },
    },
  ];

  const [selectedUserDetail, updateUserDetail] = useState({});
  const [isModalOpen, toggleModalOpen] = useState(false);
  const handleEdit = ({ row }) => {
    console.log('details', row);
    updateUserDetail(row);
    toggleModalOpen(true);
  };

  const handleClose = () => {
    updateUserDetail({});
    toggleModalOpen(false);
  };

  const handleOnchange = (event) => {
    console.log('event', typeof event);
    if (!event.target) {
      updateUserDetail({ ...selectedUserDetail, dob: event });
    } else {
      updateUserDetail({ ...selectedUserDetail, [event.target.id]: event.target.value });
    }
  };

  const handleSave = async () => {
    await editUser(selectedUserDetail?.userId, { ...selectedUserDetail, dob: moment(selectedUserDetail.dob).format('DD-MM-YYYY') });
    await getAllUser().then((resp) => {
      updateUserList(
        resp.map((ele, index) => {
          return { ...ele, id: index + 1 };
        })
      );
      return;
    });
    updateUserDetail({});
    toggleModalOpen(false);
  };

  const handleCancel = () => {
    updateUserDetail({});
    toggleModalOpen(false);
  };

  return (
    <div className="UserMaintenance-root">
      <p className="page-heading">Patient List</p>
      <DataGrid rows={userList} columns={columns} />
      <Dialog onClose={handleClose} open={isModalOpen} maxWidth="md" fullWidth>
        <DialogTitle>Set backup account</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            {fieldDetails.map((fieldDetail, index) => {
              return (
                <Grid item xs={4} key={index}>
                  <InputLabel id={fieldDetail?.name} className="PatientRegistration-heading">
                    {fieldDetail?.label}
                  </InputLabel>
                  <GetComponents
                    value={
                      fieldDetail?.type === 'date'
                        ? moment(selectedUserDetail[fieldDetail?.name], 'DD-MM-YYYY')
                        : selectedUserDetail[fieldDetail?.name]
                    }
                    type={fieldDetail?.type}
                    label={fieldDetail?.label}
                    name={fieldDetail?.name}
                    options={fieldDetail?.option}
                    defaultValue={fieldDetail?.defaultValue}
                    onChange={handleOnchange}
                  />
                </Grid>
              );
            })}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UserMaintenance;
