import template from './template.js';
import './css/web-comp.css';

// ==============================================

import { lo, lg, lr, lb, ly } from '../util/log';
lg('VITE: resources/js/web-comps/web-comp.js');

// ==============================================


// Step 1: Define
class CustomElement extends HTMLElement {

  constructor() {
    super();
  }

  connectedCallback() {
    const content = template.content;
    const cloned = content.cloneNode(true);
    this.append(cloned);

    // console.log('this: ', this);
    const span = this.querySelector('span');
    span.textContent = this.getAttribute('title');
  }

}

// ==============================================

// Step 2: Register
// window.customElements.define('web-comp', CustomElement);
window.customElements.define('z-button', CustomElement);