import React from 'react';
import { Grid } from '@material-ui/core';

export const NoWrap = () => 
    <Grid container wrap='nowrap' spacing={1} style={{border: '1px solid black'}}>

    <Grid item style={{border: '1px solid red', margin: '4px'}}>
        <button>
        This item will shrink to fit it's content
        </button>
    </Grid>
        <Grid item xs={12} style={{border: '1px solid red', margin: '4px'}}>
            This item will take up the remaining content
        </Grid>
    </Grid>;

export const SevenColumns = () => 
    <Grid container wrap='nowrap' spacing={1} style={{border: '1px solid black'}}>
    {
        Array.from({length: 7}, (v, i) => <Grid key={i} xs={12} item style={{border: '1px solid red', margin: '4px'}}>Col</Grid>)
    }
    </Grid>;