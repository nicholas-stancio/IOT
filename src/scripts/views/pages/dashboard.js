import api from '../../global/api';
import fetchApiModal from '../../templates/modal';

function checkToken() {
  // check if token valid
  const token = { token: sessionStorage.getItem('accessToken') };
  api.checkToken(token);
}

const Dashboard = {

  async render() {
    $('nav').html('<nav-bar></nav-bar>'); // add navbar
    checkToken();

    return `
      <div id="embedDiv">
        <embed src="http://35.240.225.5:1880/ui/" style="width: 100%; height: 93.45vh;">
      </div>

      ${fetchApiModal()}
    `;
  },

  async afterRender() {
    // -------- Check Token Loop ----------
    const minuteLoop = setInterval(() => {
      checkToken(); // Loop every minute to check token
    }, 60000);

    // -------- NavBar Functions ----------
    $('.LogoutLink').on('click', () => {
      clearInterval(minuteLoop);
    });

    $('.navBarNodeRed').on('click', () => {
      checkToken();
      $('#embedDiv').empty();
      $('#embedDiv').html('<embed src="http://35.240.225.5:1880/#flow/65f999f3a6504d70" style="width: 100%; height: 93.45vh;">');
    });

    $('.navBarMySql').on('click', () => {
      checkToken();
      $('#embedDiv').empty();
      $('#embedDiv').html(`
        <div class="d-flex justify-content-center align-items-center" style="width: 100%; height: 80vh;">
            <div>
              <h2 class="mb-4">PHP My Admin will open on another tab</h2>
              <table class="table table-borderless table-sm table-responsive" style="width: 20px;">
                <tbody>
                  <tr>
                    <th scope="row">Username:</th>
                    <td>root</td>
                  </tr>
                  <tr>
                    <th scope="row">Password:</th>
                    <td>powder</td>
                  </tr>
                </tbody>
              </table>
            </div>
        </div>
      `);
    });

    $('.navBarDashboard').on('click', () => {
      checkToken();
      $('#embedDiv').empty();
      $('#embedDiv').html('<embed src="http://35.240.225.5:1880/ui/" style="width: 100%; height: 93.45vh;">');
    });

    // -------- Modal Functions ----------
    $('#fetchApiModalFetch').on('click', async () => {
      const checkState = $('#fetchApiModalCheckBox').is(':checked');
      const param1 = $('#fetchApiModalEndpointP1').val();
      const param2 = $('#fetchApiModalEndpointP2').val();
      const paramCity = $('#fetchApiModalEndpointP3').val();
      let param = '';

      if (param1 === '' && param2 === '' && paramCity === '') {
        if (checkState === true) {
          param = `/?token=${sessionStorage.getItem('accessToken')}`;
        }
      } else if (checkState === true) {
        param = `/?token=${sessionStorage.getItem('accessToken')}&Start=${param1}&End=${param2}&City=${paramCity}`;
      } else {
        param = `/?Start=${param1}&End=${param2}&City=${paramCity}`;
      }

      const modalData = {
        endpoint: $('#fetchApiModalEndpoint').val() + param,
        method: $('#fetchApiModalMethod').val(),
        body: $('#fetchApiModalBody').val(),
      };
      console.log(modalData);
      await api.customFetch(modalData);
    });
    // -------- End ----------
  },
};

export default Dashboard;
