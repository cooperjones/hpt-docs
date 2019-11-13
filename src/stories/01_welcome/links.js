import React from 'react';
import { Typography, Grid, Link, Divider } from '@material-ui/core';

export const Title = ({text}) => <Typography variant='h2' align='center' style={{paddingBottom: '16px'}}>{text}</Typography>;

export const Heading = ({text, paddingTop='24px'}) => <Grid container wrap='nowrap' alignItems='center' style={{paddingTop, paddingBottom: '8px'}}><Typography variant='h4' component='span'>{text}</Typography><Grid item style={{flex: '1', marginLeft: '8px'}}><Divider style={{height: '1px'}} /></Grid></Grid>;

export const LinkItem = ({title, link}) => 
<Grid container spacing={1}>
    <Grid item>
        <Typography variant='body1' component="span">
            {title}
        </Typography>
    </Grid>
    <Grid item>
        <Link href={link} target="_blank" variant='body1'>
            {link}
        </Link>
    </Grid>
</Grid>