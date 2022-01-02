/* eslint-disable quotes */
import api from '../../global/api';

const Dashboard = {

  async render() {
    $('nav').html('<nav-bar></nav-bar>'); // add navbar
    // check if token valid
    const token = { token: sessionStorage.getItem('accessToken') };
    api.checkToken(token);

    return `
      <div id="embedDiv">
        <embed src="http://34.124.248.36:1880/dash/" style="width: 100%; height: 92.8vh;">
      </div>
    `;
  },

  async afterRender() {
    $('.navBarNodeRed').on("click", () => {
      $('#embedDiv').empty();
      $('#embedDiv').html('<embed src="http://34.124.248.36:1880/#flow/65f999f3a6504d70" style="width: 100%; height: 92.8vh;">');
    });

    $('.navBarMySql').on("click", () => {
      $('#embedDiv').empty();
      $('#embedDiv').html(`
        <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 80vh;">
            <div class="inline-block align-middle">
              <h2 >PHP My Admin will open in another tab</h2>
            </div>
        </div>
      `);
    });

    $('.navBarDashboard').on("click", () => {
      $('#embedDiv').empty();
      $('#embedDiv').html('<embed src="http://34.124.248.36:1880/dash/" style="width: 100%; height: 92.8vh;">');
    });
  },
};

export default Dashboard;
