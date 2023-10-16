import { LitElement, html, css } from 'lit';

class PolarisChip0 extends LitElement {
  static properties = {
    header: { type: String },
  }

  static styles = css`
    :host {
     display: block:
    }
  `;

  constructor() {
    super();
    this.header = 'My boilerplate app';
  }

  render() {
    return html`
     <span>${this.header}</span>`;
  }
}

customElements.define('polaris-chip0', PolarisChip0);