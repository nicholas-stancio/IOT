import 'regenerator-runtime';
import 'bootstrap';

import '../styles/main.css';
import '../styles/main.scss';

import './components/nav-bar';

import App from './views/app';

const app = new App({
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
