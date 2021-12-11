/* eslint-disable no-useless-constructor */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    const loginLink = '#/login';

    this.innerHTML = `
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">IOT - Nicholas Stancio Saka</a>
            <form class="d-flex">
              <a href="${loginLink}" class="text-decoration-none navbar-text">
                <img src="./images/icons8-logout-28.png" class="mx-1"/>Logout</a>
            </form>
        </div>
    </nav>
`;
  }
}

customElements.define('nav-bar', NavigationBar);
