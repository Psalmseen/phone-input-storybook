import {html, LitElement} from 'lit';

import {inputStyles} from './styles.js';
import {countryDailCodes} from './assets/data.js';

class InputField extends LitElement {
  static properties = {
    countryCode: {},
  };

  static styles = [inputStyles];

  render() {
    this.countryCode = countryDailCodes;

    return html` <div class="input">
      <div class="select">
        <select name="country-code" id="c-code">
          ${this.countryCode.map(
            (code) => html`<option value="${code}">${code}</option>`
          )}
        </select>
        <span class="chevron"></span>
      </div>
      <div class="input__wrapper">
        <input
          type="number"
          step="1"
          class="input__field"
          placeholder="2233434"
          value="9899636757"
          id="contact"
        />
        <label for="contact">Contact Number</label>
      </div>
    </div>`;
  }
}

customElements.define('phone-input', InputField);
