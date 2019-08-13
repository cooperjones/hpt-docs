import React from 'react';
import { addDecorator, addParameters, load } from '@storybook/react';
import Theme from '@highpoint/ui-elements/dist/es/Theme';
import { CssBaseline } from '@material-ui/core';
import { DocsPage } from '@storybook/addon-docs/blocks';
import { themes } from '@storybook/theming';


addParameters({
  options: {
    theme: {brandTitle: 'Highpoint Frontend Docs', ...themes.light},
  }
});

addDecorator(storyFn => <Theme.Provider ><CssBaseline />{storyFn()}</Theme.Provider>)


load(require.context('../src/stories', true, /\.js$/), module);
load(require.context('../src/stories', true, /\.mdx$/), module);