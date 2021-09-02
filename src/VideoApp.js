import React from 'react';
import { Typography, AppBar } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import VideoPlayer from './videoComponents/VideoPlayer'
import Notifications from './videoComponents/Notifications'
import Options from './videoComponents/Options'

const useStyles = makeStyles((theme)=> ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        marginTop: '60px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
        zIndex:"1",
      },
}))

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Chat</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    );
}
export default App;