import api from '../../global/api';

const Dashboard = {

  async render() {
    $('nav').html('<nav-bar></nav-bar>'); // add navbar
    // check if token valid
    const token = { token: sessionStorage.getItem('accessToken') };
    api.checkToken(token);

    return `
    <embed src="http://34.124.248.36:1880/dash/" style="width: 100%; height: 94.5vh;">
    `;
  },

  async afterRender() {
    // $('nav-bar').show();
  },
};

export default Dashboard;
