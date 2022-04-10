/* eslint-disable max-len */
import api from '../../global/api';
import checkError from '../../global/error-handling';

const Login = {
  async render() {
    $('nav').empty(); // remove navbar
    return `
    <section class="vh-80 d-flex flex-row align-items-center">
    <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-md-9 col-lg-6 col-xl-5">
                <img src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-login-form/draw2.png"
                    class="img-fluid" alt="Gambar Antris">
            </div>
            <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form  class="mb-4">
                    <div class="form-outline mb-2">
                        <label>Email</label>
                        <input type="email" id="loginEmail" class="form-control form-control-lg"
                            placeholder="Enter a valid email address" />
                        <div class="invalid-feedback" id="loginEmailInvalid"></div>
                    </div>

                    <div class="form-outline mb-3">
                        <label>Password</label>
                        <input type="password" id="loginPassword" class="form-control form-control-lg"
                            placeholder="Enter password" />
                        <div class="invalid-feedback" id="loginPasswordInvalid"></div>
                    </div>

                    <div class="d-flex justify-content-between align-items-center">
                        <div class="form-check mb-0">
                            <input class="form-check-input me-2" type="checkbox" value="" id="loginRememberMe" />
                            <label class="form-check-label" for="loginRememberMe">
                                Remember me
                            </label>
                        </div>
                        <a href="#!" class="text-body">Forgot password?</a>
                    </div>

                    <div class="text-center text-lg-start mt-4 pt-2">
                        <button type="button" class="btn btn-primary btn-lg"
                            style="padding-left: 2.5rem; padding-right: 2.5rem;" id="LoginButton">Login</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#/register"
                                class="link-danger">Register</a></p>
                        <div class="invalid-feedback" id="loginApiInvalid"></div>
                    </div>

                </form>
            </div>
        </div>
    </div>
    </section>
          `;
  },

  async afterRender() {
    $('#LoginButton').on('click', () => {
      const user = {
        id: $('#loginEmail').val(),
        password: $('#loginPassword').val(),
      };

      const checkErrorVal = checkError({
        register: false,
        user,
        emailInvalidId: '#loginEmailInvalid',
        passwordInvalidId: '#loginPasswordInvalid',
      });

      if (checkErrorVal === true) {
        // api.signIn(user);
        window.location.href = '#/dashboard';
      }
    });
  },
};

export default Login;
