class AppHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
      <div class="header__content">
        <div class="app__bar">
          <a id="menu__button" aria-label="navigation-menu" tabindex="0" href="#">☰</a>
          <a href="/" class="logo" tabindex="0">
            <img src=" ./svg/logo.svg" alt="Logo Cari Resto"
          /></a>
        </div>
        <nav id="app__menu">
          <ul>
            <li><a href="#/home" class="menu__item active" tabindex="0">Home</a></li>
            <li><a href="#/favorites" class="menu__item" tabindex="0">Favorites</a></li>
            <li>
              <a
                href="https://www.linkedin.com/in/utrodus-said/"
                target="_blank"
                rel="noopener"
                tabindex="0"
                >About Us</a
              >
            </li>
          </ul>
        </nav>
      </div>
    </header>
      `;
  }
}

customElements.define('app-header', AppHeader);
