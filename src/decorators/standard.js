import React from 'react';

 const decorator = storyFn => 
    <div style={{padding: '16px'}}>
        {storyFn()}
    </div>;

export default decorator;