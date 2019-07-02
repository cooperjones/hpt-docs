import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, CircularProgress, Modal } from '@material-ui/core';

const GoogleDoc = ({src, editSrc}) => {
    const [isLoaded, setIsLoaded] = useState(false);
    return (
        <>
        {<Modal
            open={!isLoaded}>
          <Grid container alignItems='center' style={{height: '100%'}}>
            <Grid item xs={12} style={{textAlign: 'center'}}>
              <CircularProgress />
            </Grid>
          </Grid>
          </Modal>}
        <iframe 
        style={{height: '100%', width: '100%', border: 'none', display: 'flex'}}
        src={src} 
        onLoad={_e => setIsLoaded(true)}/>
        <Button color='primary' variant='contained' size='small' href={editSrc} target="_blank" style={{position: 'absolute', right: '32px', top: '0px', borderTopLeftRadius: '0', borderTopRightRadius: '0'}}>
        Edit this page
        </Button>
        </>
    );
}

GoogleDoc.propTypes = {
    src: PropTypes.string,
    editSrc: PropTypes.string
  };

export default GoogleDoc;
