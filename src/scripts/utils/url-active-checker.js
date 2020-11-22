/* eslint-disable no-plusplus */
const UrlActiveChecker = {
  init({ menus, activeMenu }) {
    this._checkActiveUrl(menus, activeMenu);
  },

  _checkActiveUrl(menus, activeMenu) {
    const _activeMenu = activeMenu;
    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener('click', function () {
        _activeMenu[0].className = activeMenu[0].className.replace(
          ' active',
          '',
        );
        this.className += ' active';
      });
    }
  },
};

export default UrlActiveChecker;
