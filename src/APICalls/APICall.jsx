const BASE_PATH = 'http://localhost:3001';

const createUser = async (payload) => {
  try {
    const response = await fetch(`${BASE_PATH}/user`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const editUser = async (userId, payload) => {
  try {
    const response = await fetch(`${BASE_PATH}/user/${userId}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getAllUser = async () => {
  try {
    const response = await fetch(`${BASE_PATH}/user`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getUser = async (userId) => {
  try {
    const response = await fetch(`${BASE_PATH}/user/${userId}`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

const createAppointment = async (payload) => {
  try {
    const response = await fetch(`${BASE_PATH}/appointment`, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const updateAppointment = async (id, payload) => {
  try {
    const response = await fetch(`${BASE_PATH}/appointment/${id}`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const deleteAppointment = async (id) => {
  try {
    const response = await fetch(`${BASE_PATH}/appointment/${id}`, { method: 'DELETE' });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getAllAppointment = async () => {
  try {
    const response = await fetch(`${BASE_PATH}/appointment`);
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};
const loginUser = async (payload) => {
  try {
    const response = await fetch(`${BASE_PATH}/login`, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' },
    });
    return await response.json();
  } catch (error) {
    console.error(error);
    return error;
  }
};

export { createUser, editUser, getAllUser, getUser, createAppointment, updateAppointment, deleteAppointment, getAllAppointment, loginUser };
