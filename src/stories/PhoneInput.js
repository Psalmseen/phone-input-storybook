import {html} from 'lit';

import {countryDailCodes} from '../assets/data';
import './phone-input.css';
export const PhoneInput = ({value, hasError}) => {
  return html`
    <div class="input">
      <div class="select">
        <select
          class=${hasError ? 'error' : ''}
          name="country-code"
          id="c-code"
        >
          ${countryDailCodes?.map(
            (code) => html`<option value="${code}">${code}</option>`
          )}
        </select>
        <span class="chevron"></span>
      </div>
      <div class="input__wrapper">
        <input
          type="number"
          step="1"
          class=${['input__field', hasError ? 'error' : ''].join(' ')}
          placeholder="Contact number"
          value=${value}
          id="contact"
        />
        ${value && html`<label for="contact">Contact Number</label>`}
      </div>
    </div>
    ${hasError
      ? html`<div class="error-text">Please enter contact number</div>`
      : ''}
  `;
};
