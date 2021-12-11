/* eslint-disable require-jsdoc */
/* eslint-disable max-len */
import api from '../../global/api';
import checkError from '../../global/error-handling';

const Register = {
  async render() {
    $('nav').empty(); // remove navbar
    return `
    <section class="vh-80 d-flex flex-row align-items-center">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png" class="img-fluid"
              alt="Gambar Antris"> <!-- TODO: Ganti foto -->
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form class="mb-4">
              <div class="form-outline mb-3 mt-4">
                <label>Email</label>
                <input type="email" id="registerEmail" class="form-control form-control-lg"
                  placeholder="Enter a valid email address" />
                <div class="invalid-feedback" id="registerEmailInvalid"></div>
              </div>

              <div class="form-outline mb-3">
                <label>Password</label>
                <input type="password" id="registerPassword" class="form-control form-control-lg"
                  placeholder="Enter password" />
                <div class="invalid-feedback" id="registerPasswordInvalid"></div>
              </div>

              <div class="form-outline mb-3">
                <label>Re-enter Password</label>
                <input type="password" id="registerPasswordConfirm" class="form-control form-control-lg"
                  placeholder="Re-enter password" />
                <div class="invalid-feedback" id="registerRePasswordInvalid"></div>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="button" class="btn btn-primary btn-lg" style="padding-left: 2.5rem; padding-right: 2.5rem;"
                  id="RegisterButton">Register</button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Already have an account? <a href="#/login"
                    class="link-danger">Login</a></p>
                <div class="invalid-feedback" id="registerApiInvalid"></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
        `;
  },

  async afterRender() {
    $('#RegisterButton').on('click', () => {
      const rePassword = $('#registerPasswordConfirm').val(); // TODO: Double, ganti klo niat
      const user = {
        id: $('#registerEmail').val(),
        password: $('#registerPassword').val(),
        confirmPassword: rePassword,
      };

      const checkErrorVal = checkError({
        register: true,
        user,
        rePassword,
        emailInvalidId: '#registerEmailInvalid',
        passwordInvalidId: '#registerPasswordInvalid',
        rePasswordInvalidId: '#registerRePasswordInvalid',
      });

      if (checkErrorVal === true) {
        api.signUp(user);
      }
    });
  },
};

export default Register;
