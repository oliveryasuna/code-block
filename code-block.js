/*
 * Copyright 2021 Oliver Yasuna
 *
 * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation
 *     and/or other materials provided with the distribution.
 * 3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without
 *      specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR
 * TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import {css, html, LitElement} from 'lit-element';
import {ifDefined} from "lit-html/directives/if-defined";

import 'prismjs/prism';

class CodeBlockElement extends LitElement {

  static get properties() {
    return {
      code: {
        attribute: false
      },

      language: {
        attribute: true,
        reflect: true,
        type: String
      },

      theme: {
        attribute: true,
        reflect: true,
        type: String
      },

      fancy: {
        attribute: true,
        reflect: true,
        type: Boolean
      }
    }
  }

  constructor() {
    super();

    this.language = 'clike';
    this.theme = 'prism';
    this.fancy = true;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    `;
  }

  render() {
    return html`
        <style></style>

        <pre class="${ifDefined(this.fancy ? `language-${this.language}` : undefined)}"><code id="output"></code></pre>
    `;
  }

  async updated(properties) {
    if(this.theme !== properties.get('theme')) {
      this.shadowRoot.querySelectorAll('style')[0].textContent = (await import(`./themes/${this.theme}.js`)).css;
    }

    if(this.code !== properties.get('code') || this.language !== properties.get('language')) {
      this.shadowRoot.querySelector('#output').innerHTML = Prism.highlight(this.code, Prism.languages[this.language], this.language);
    }
  }

}

window.customElements.define('code-block', CodeBlockElement);

export {
  CodeBlockElement
};
