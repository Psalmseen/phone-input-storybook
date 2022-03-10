import {PhoneInput} from './PhoneInput.js';

export default {
  title: 'Inputs/Phone-Input',
  argTypes: {
    value: {control: 'number'},
  },
};

const Template = (args) => PhoneInput(args);

export const Empty = Template.bind({});
Empty.args = {
  value: '',
  hasError: false,
};

export const Filled = Template.bind({});
Filled.args = {
  value: '9899636757',
  hasError: false,
};

export const Error = Template.bind({});
Error.args = {
  value: '9899636757',
  hasError: true,
};
