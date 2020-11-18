const UrlActiveChecker = {
  init({ menus, activeMenu }) {
    this._checkActiveUrl(menus, activeMenu);
  },

  _checkActiveUrl(menus, activeMenu) {
    for (let i = 0; i < menus.length; i++) {
      menus[i].addEventListener("click", function () {
        activeMenu[0].className = activeMenu[0].className.replace(
          " active",
          ""
        );
        this.className += " active";
      });
    }
  },
};

export default UrlActiveChecker;
