import React, { Component } from 'react';
import { Typography, Grid } from '@material-ui/core';

const Title = ({text}) => <Typography variant='h2' align='center' style={{paddingBottom: '16px'}}>{text}</Typography>;

const Heading = ({text}) => <Grid container wrap='nowrap' alignItems='center' style={{paddingTop: '16px', paddingBottom: '8px'}}><Typography variant='h4'>{text}</Typography><Grid item style={{flex: '1', marginLeft: '8px'}}><Divider /></Grid></Grid>;

export class TOC extends Component {
  render() {
    return (
      <Grid container justify='center' alignItems='center' alignContent='center' direction='column' style={{height: '100%'}}>
      <Grid item style={{maxWidth: '1200px', padding: '16px', backgroundColor: 'white', marginTop: '24px', width: '100%'}}>
        <Typography variant='caption' align='center'>
          Accessibility
        </Typography>
        <Typography variant='caption' align='center'>
          Components
        </Typography>
      </Grid>
      </Grid>
    );
  }
}

