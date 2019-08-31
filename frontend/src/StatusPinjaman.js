import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Mascot from './assets/mascot.png';
import Paper from '@material-ui/core/Paper';
import { Button, Card, CardContent, CardActions, Box, Grid } from '@material-ui/core';
import Kekayaan from './components/Kekayaan';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    titles: {
        paddingBottom: '1rem',
    },
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

function StatusPinjaman(props) {
    const classes = useStyles();
    const [status, setStatus] = useState("verifikasi");

    const next = (event) => {
        event.preventDefault()
        if (status === "verifikasi") {
            setStatus("verified")
            props.history.replace({ pathname: '/status/pinjaman', state: { status: "verified" } })
        } else {
            setStatus("verifikasi")
            props.history.replace({ pathname: '/status/pinjaman', state: { status: "verifikasi" } })
        }
    }

    var dashboardContent;

    if (status === "verifikasi") {
        dashboardContent = (
            <Typography style={{ paddingBottom: '1rem' }}>
                Saat ini pengajuan pinjaman kamu sedang dalam proses verifikasi oleh tim TokoKoperasi. Tunggu ya, ga lama kok!
            </Typography>
        )
    } else {
        dashboardContent = (
            <Typography style={{ paddingBottom: '1rem' }}>
                Pengajuan kamu telah disetujui. Dana akan di cairkan dalam waktu 24 jam
            </Typography>
        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} style={{ paddingBottom: '0.5rem' }}>
                        <div className={classes.titles}>
                            <Typography component="h1" variant="h5" style={{ color: 'green', fontWeight: 800 }}>
                                Selamat Satria Sipayung
                            </Typography>
                        </div>
                        <img width="15%" src={Mascot} alt="Mascot" />
                    </div>
                    {dashboardContent}
                    {status !== "verified" && (<Button className={classes.button} onClick={next}>UPDATE STATUS</Button>)}
                </Container>
            </header>
        </div >
    );
}

export default StatusPinjaman;
