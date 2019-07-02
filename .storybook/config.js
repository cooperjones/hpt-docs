import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import Theme from '@highpoint/ui-elements/dist/es/Theme';
import { CssBaseline } from '@material-ui/core';

addDecorator(storyFn => <Theme.Provider ><CssBaseline />{storyFn()}</Theme.Provider>)

function loadStories() {
  require('../src/stories');
}

configure(loadStories, module);
