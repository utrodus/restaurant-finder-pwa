import 'regenerator-runtime';
import '../styles/index.scss';
import App from './views/app';
import './components/app-header';
import './components/app-footer';
import RegSw from './utils/reg-sw';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#menu__button'),
  drawer: document.querySelector('#app__menu'),
  content: document.querySelector('#primaryContent'),
  appmenu: document.getElementsByClassName('menu__item'),
  activeMenu: document.getElementsByClassName('menu__item active'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  RegSw();
});
