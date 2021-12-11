/* eslint-disable no-alert */
/* eslint-disable consistent-return */
/* eslint-disable no-use-before-define */
/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from './api-endpoint';

const api = {
  signIn: (user) => signIn(user),
  signUp: (user) => signUp(user),
  checkToken: (token) => checkToken(token),
};

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
        console.log(data);
      } else {
        alert(data);
        window.location.href = '#/login';
      }
    })
    .catch((err) => {
    });
}

export default api;
