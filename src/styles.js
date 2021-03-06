import {css} from 'https://unpkg.com/@polymer/lit-element@latest/lit-element.js?module';

export const inputStyles = css`
  :host {
    margin: 0;
    padding: 0;
  }
  * {
    box-sizing: border-box;
  }
  .input {
    display: flex;
    color: #1d252d;
  }
  input,
  select {
    border: 1px solid#c1cad1;
    color: #1d252d;
    outline: none;
    font-size: 18px;
    line-height: 25px;
    appearance: none;
    font-weight: 500;
  }
  input {
    padding: 20px;
    border-radius: 0 4px 4px 0;
  }
  ::placeholder {
    color: #8ba6c1;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  select {
    border-radius: 4px 0 0 4px;
    padding: 20px 47px 20px 24px;
    background-color: transparent;
    border-right: none;
    cursor: pointer;
  }
  .select {
    position: relative;
  }
  .chevron {
    width: 14px;
    height: 9px;
    background: url('./src/assets/right-chevron.svg');
    background-size: contain;
    display: block;
    position: absolute;
    top: 50%;
    right: 24.5px;
    transform: translateY(-50%);
    z-index: -1;
  }
  .input__wrapper {
    position: relative;
  }
  label {
    position: absolute;
    top: 0;
    left: 18px;
    background-color: #fff;
    padding: 2px;
    font-size: 12px;
    transform: translateY(-50%);
    display: block;
  }
`;
