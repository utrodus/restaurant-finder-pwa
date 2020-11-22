import DrawerInitiator from '../utils/drawer-initator';
import UrlActiveChecker from '../utils/url-active-checker';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, appmenu, activeMenu,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._appmenu = appmenu;
    this._activeMenu = activeMenu;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
    UrlActiveChecker.init({
      menus: this._appmenu,
      activeMenu: this._activeMenu,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}
export default App;
