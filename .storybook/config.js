import React from 'react';
import { addDecorator, addParameters, configure } from '@storybook/react';
import Theme from '@highpoint/ui-elements/dist/es/Theme';
import { CssBaseline } from '@material-ui/core';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    theme: themes.light,
  }
});

addDecorator(storyFn => <Theme.Provider >{storyFn()}</Theme.Provider>);


configure(require.context('../src/stories', true, /\.stories\.(js|jsx|ts|tsx|mdx)$/), module);