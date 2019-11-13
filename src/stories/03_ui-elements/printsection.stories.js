import React from 'react';
import { PrintSection } from '@highpoint/ui-elements';
import { Button, Typography } from '@material-ui/core';
import { Source } from '@storybook/addon-docs/blocks';

export default {
  component: PrintSection,
  title: 'Components|ui-elements/PrintSection'
};

export const standard = () => (
    <>
    <Button
      style={{margin: '12px'}}
      variant="outlined"
      onClick={e => window.print()}
    >
      Print
    </Button>
    <Typography variant='body1' style={{margin: '12px', whiteSpace: 'pre-line'}}>
        {`When printed, the main content of this page will be hidden and the content in the PrintSection component will show.
        This is accomplished by rendering the PrintSection content outside of the main app body using the `}<a href='https://material-ui.com/components/portal/'>Material-UI Portal component</a>
        {`. This also means that the PrintSection component can be rendered from anywhere in the React app tree.
        Since the printable content is now rendered outside of the main app element, a print media query can be used to hide the main content of the page on print (@media print {display: none !important;})
        This print query style is automatically applied in the global CSS in the Campus Experience and Schedule Builder projects.`}
    </Typography>
    <Source code={`
<PrintSection>
    {"This is the content that will be printed"}
    <div style={{border: '1px solid black', padding: '8px'}}>
        Test
    </div>
</PrintSection>
    `} />
    <PrintSection>
        {"This is the content that will be printed"}
        <div style={{border: '1px solid black', padding: '8px'}}>
            Test
        </div>
    </PrintSection>
  </>
);