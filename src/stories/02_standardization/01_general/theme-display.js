import React from 'react';
import ReactJson from 'react-json-view';
import { Theme } from '@highpoint/ui-elements';
import { useTheme } from '@material-ui/core/styles';

const ThemeDisplay = () => {
  // Declare style hook to use classes
  const theme = useTheme();

  return <ReactJson src={theme} enableClipboard={false} collapsed={1} />;
};

const ThemeWrapper = () => (<Theme.Provider config={{
  primaryColor: "#22b55a",
  primaryText: "#f2f2f2",
  sansSerifFont:
    '"IBM Plex Sans", "Helvetica Neue", Helvetica, Arial, sans-serif'
}}><ThemeDisplay /></Theme.Provider>)

export default ThemeWrapper;
