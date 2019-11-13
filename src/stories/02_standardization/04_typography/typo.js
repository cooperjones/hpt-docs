import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';

export const Typo = ({variant, title, description}) => (
      <Grid item style={{ padding: '16px' }}>
        <Grid container alignItems="center">
          <Grid item style={{ minWidth: '150px' }}>
            <Typography variant={variant}>{title}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              ({variant})
            </Typography><Typography variant="body2">{description}</Typography>
          </Grid>
        </Grid>
      <Divider />
      </Grid>
  );