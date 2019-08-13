import React, { Component } from 'react';
import { Typography, Grid, Link } from '@material-ui/core';

export class Welcome extends Component {
  render() {
    return (
      <Grid container justify='center' alignItems='center' alignContent='center' direction='column' style={{height: '100%'}}>
      <Typography variant="h1" style={{paddingBottom: '8px'}}>Highpoint Technology Solutions</Typography>
      <Typography variant="h4" color='textSecondary'>Front-End Design/Technical Guide</Typography>
      <Grid item style={{maxWidth: '800px', padding: '16px', backgroundColor: 'white', marginTop: '24px'}}>
        <Typography variant='caption' align='center'>
          Writing Documentation? Make a copy of this&nbsp;
          <Link href="https://docs.google.com/document/d/e/2PACX-1vQmyZGz8M5fvH70BuJB3Xw9Ym5zu9iFlX1S4r6mfRxZTKA3gBUn7szIWlU-2nrVZjX8Gzx8uTkpsll3/pub">
            Template Google Doc
          </Link>
        </Typography>
      </Grid>
      </Grid>
    );
  }
}
