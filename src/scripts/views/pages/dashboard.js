import api from '../../global/api';

const Dashboard = {

  async render() {
    $('nav').html('<nav-bar></nav-bar>'); // add navbar
    // check if token valid
    const token = { token: sessionStorage.getItem('accessToken') };
    api.checkToken(token);

    return `
    <h1>Dashboard</h1>
    `;
  },

  async afterRender() {
    // $('nav-bar').show();
  },
};

export default Dashboard;
