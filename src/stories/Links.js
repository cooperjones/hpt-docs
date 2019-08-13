import React, { Component } from 'react';
import { Typography, Grid, Link, Divider } from '@material-ui/core';


const Title = ({text}) => <Typography variant='h2' align='center' style={{paddingBottom: '16px'}}>{text}</Typography>;

const Heading = ({text}) => <Grid container wrap='nowrap' alignItems='center' style={{paddingTop: '16px', paddingBottom: '8px'}}><Typography variant='h4'>{text}</Typography><Grid item style={{flex: '1', marginLeft: '8px'}}><Divider /></Grid></Grid>;

const LinkItem = ({title, link}) => 
<Grid container spacing={8}>
    <Grid item>
        <Typography variant='body1'>
            {title}
        </Typography>
    </Grid>
    <Grid item>
        <Link href={link} target="_blank" variant='body1'>
            {link}
        </Link>
    </Grid>
</Grid>

export class Links extends Component {
  render() {
    return (
      <Grid container justify='center' alignItems='center' alignContent='center' direction='column' style={{height: '100%'}}>
      <Grid item style={{maxWidth: '1200px', padding: '16px', backgroundColor: 'white', marginTop: '24px'}}>
        <Title text={'Useful Links'} />
        <Heading text="Highpoint Links" />
        <LinkItem title='Highpoint Links Page:' link='https://m.mhighpoint.com/links' />
        <Heading text="UI Packages" />
        <LinkItem title='ui-elements:' link='https://www.npmjs.com/package/@highpoint/ui-elements' />
        <LinkItem title='bs-ui-elements:' link='https://www.npmjs.com/package/@highpoint/reason-ui-elements' />
        <LinkItem title='reason-ui-elements:' link='https://www.npmjs.com/package/@highpoint/reason-ui-elements' />
        <Heading text="Documentation" />
        <LinkItem title='Material UI Docs:' link='https://v3-9-0.material-ui.com/' />
        <LinkItem title='Highpoint Bitbucket:' link='https://bitbucket.org/hp_mobile/' />
      </Grid>
      </Grid>
    );
  }
}
