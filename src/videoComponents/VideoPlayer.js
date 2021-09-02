import React, { useState, useContext } from 'react';
import { Grid, Typography, Paper, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Mic, Videocam, MicOff, VideocamOff} from '@material-ui/icons'

import { SocketContext } from './SocketContext'

const useStyles = makeStyles((theme) => ({
    video: {
        width: '550px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
    },
    gridContainer: {
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        border: '2px solid black',
        margin: '10px',
    },
    mic: {
        margin: '0 5px'
    }
}));



const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    const classes = useStyles();
    const [micIcon, setMicIcon] = useState(true)
    const [videoIcon, setVideoIcon] = useState(true)

    function muteUnmute() {
        const enabled = stream.getAudioTracks()[0].enabled;
        if (enabled) {
            stream.getAudioTracks()[0].enabled = false;
            setMicIcon(false)
           
        } else {
            stream.getAudioTracks()[0].enabled = true;
            setMicIcon(true)
        }
    }
    function playStop() {
        const enabled = stream.getVideoTracks()[0].enabled;
        if (enabled) {
            stream.getVideoTracks()[0].enabled = false;
            setVideoIcon(false)
        } else {
            stream.getVideoTracks()[0].enabled = true;
            setVideoIcon(true)
        }
    }


    return (
        <Grid container className={classes.gridContainer}>
            {/* Our own video */}
            {
                stream && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{name || 'Name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                        </Grid>
                        <div >
                            <Button variant="contained" color="secondary" className='muteButton' className={classes.mic} startIcon={micIcon ? <Mic fontSize="large" /> : <MicOff fontSize="large" /> } onClick={muteUnmute}> </Button>
                        <Button variant="contained" color="secondary" className='videoButton' startIcon={videoIcon ? <Videocam fontSize="large" /> : <VideocamOff fontSize="large" /> } onClick={playStop}> </Button>
                        </div>
                    </Paper>

                )
            }
            {/* User's video */}

            {
                callAccepted && !callEnded && (
                    <Paper className={classes.paper}>
                        <Grid item xs={12} md={6}>
                            <Typography variant='h5' gutterBottom>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay className={classes.video} />
                        </Grid>
                       
                    </Paper>

                )
            }
        </Grid>
    );
}
export default VideoPlayer;