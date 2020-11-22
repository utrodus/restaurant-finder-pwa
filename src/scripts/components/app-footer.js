class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
      <p class="footer__copyright">Copyright © 2020 CariResto</p>
    </footer>
      `;
  }
}

customElements.define('app-footer', AppFooter);
