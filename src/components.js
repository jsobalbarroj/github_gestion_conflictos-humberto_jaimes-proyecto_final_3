class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
      <img src="NEWCREHANA.png" alt="Imagen">
      <nav>
      <ul>
        <li><a href="index.html">Descripci&oacute;n del proyecto final</a></li>
        <li><a href="Activity1.html">Avance 1</a></li>
        <li><a href="Activity2.html">Avance 2</a></li>
        <li><a href="Activity3.html">Avance 3</a></li>
        </ul>
      </nav>
    </header>
      `;
    }
  }

  class CopyFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <footer>
        <p>Github avanzado: Gesti&oacute;n de conflictos - Crehana</p>
      </footer>    
      `;
    }
  }

  class Footer extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `    
      <footer>
        <p>Github avanzado: Gesti&oacute;n de conflictos</p>
      </footer>    
      `;
    }
  }

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);
customElements.define('copy-footer', CopyFooter);