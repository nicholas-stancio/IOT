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
    const dashboardLink = '#/dashboard';
    const antrisLink = 'https://github.com/MrOMadness/IOT';
    const loginLink = '#/login';
    const navType = 'dark'; // light, dark, primary

    this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-${navType} bg-${navType}">
        <div class="container-fluid">
          <a class="navbar-brand" href="${dashboardLink}">IOT - Nicholas Stancio Saka</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" id="logoutMobile">
                <a class="nav-link" href="${antrisLink}">About Me</a>
              </li>
              <li class="nav-item" id="logoutMobile">
                <a class="nav-link" href="${loginLink}">Logout</a>
              </li>
            </ul>
            <span class="navbar-text" id="logoutDesktop">
              <a href="${antrisLink}" class="mx-2">About Me</a> <a href="${loginLink}" class="mx-1"><b>Logout</b></a>
            </span>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('nav-bar', NavigationBar);
