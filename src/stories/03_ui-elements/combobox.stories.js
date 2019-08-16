import React from 'react';
import { ComboBox } from '@highpoint/ui-elements';
import { DocsPage } from '@storybook/addon-docs/blocks';
import Decorator from '../../decorators/standard';

export default {
  component: ComboBox,
  title: 'Components|ui-elements/ComboBox'
};

export const standard = () => (
  <ComboBox
    label="Combobox"
    value={''}
    onChange={newVal => { console.log(newVal); }}
    options={Array.from({ length: 100 }, (v, i) => [i.toString(), `Option ${i.toString()}`])} 
  />
);
standard.story = {
  parameters: {decorators: [Decorator]}
};