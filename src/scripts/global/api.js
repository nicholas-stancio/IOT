/* eslint-disable no-alert */
import API_ENDPOINT from './api-endpoint';
import CONFIG from './config';

function signUp(user) {
  return fetch(API_ENDPOINT.SIGN_UP, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.text())
    .then((data) => {
      if (data === 'user registered') {
        alert(`${data}. Please login with your credentials`);
        window.location.href = '#/login';
      } else {
        $('#registerApiInvalid').html(data);
        $('#registerApiInvalid').show();
      }
    })
    .catch((err) => {
      alert(err);
    });
}

function signIn(user) {
  return fetch(API_ENDPOINT.SIGN_IN, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.text())
    .then((data) => {
      if (data === 'No user exist with this id and password') {
        $('#loginApiInvalid').html(data);
        $('#loginApiInvalid').show();
      } else {
        const json = JSON.parse(data);
        sessionStorage.setItem('accessToken', json.token);
        window.location.href = '#/dashboard';
      }
    })
    .catch((err) => {
      alert(err);
    });
}

function logOut() {
  return fetch(API_ENDPOINT.LOG_OUT, {
    method: 'POST',
    body: JSON.stringify({ token: sessionStorage.getItem('accessToken') }),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.text())
    .then((data) => {
      if (data !== 'Logout Success') {
        alert(data);
      }
    })
    .catch((err) => {
      alert(err);
    });
}

function checkToken(token) {
  return fetch(API_ENDPOINT.CHECK_TOKEN, {
    method: 'POST',
    body: JSON.stringify(token),
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.text())
    .then((data) => {
      if (data === 'This token is valid') {
        return true;
      }
      alert(data);
      window.location.href = '#/login';
      return false;
    })
    .catch((err) => {
      alert(err);
    });
}

function customFetch(modalData) {
  if (modalData.method.toUpperCase() === 'GET') {
    return fetch(`${CONFIG.BASE_URL}${modalData.endpoint}`, {
      method: 'GET',
    }).then((response) => response.text())
      .then((data) => {
        alert(data);
      })
      .catch((err) => {
        alert(err);
      });
  }
  console.log(modalData.body);
  console.log(JSON.stringify(modalData.body));
  return fetch(`${CONFIG.BASE_URL}${modalData.endpoint}`, {
    method: modalData.method,
    body: modalData.body,
    headers: { 'Content-type': 'application/json' },
  }).then((response) => response.text())
    .then((data) => {
      alert(data);
    })
    .catch((err) => {
      alert(err);
    });
}

const api = {
  signIn: (user) => signIn(user),
  signUp: (user) => signUp(user),
  checkToken: (token) => checkToken(token),
  logOut,
  customFetch: (modalData) => customFetch(modalData),
};

export default api;
