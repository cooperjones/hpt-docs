import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import Theme from '../ui-elements/src/Theme';
import {jsComponent as ThemeProvider} from "../reason-ui-elements/src/internal/ThemeProvider.bs";
import { themes } from '@storybook/theming';
import './mocks';

addParameters({
  options: {
    theme: themes.light,
  }
});

addDecorator(storyFn => <ThemeProvider><Theme.Provider >{storyFn()}</Theme.Provider></ThemeProvider>);


configure([
  require.context('../src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
  require.context('../ui-elements/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
  require.context('../reason-ui-elements/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/),
], module); 