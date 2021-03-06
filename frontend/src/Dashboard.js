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
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        color: theme.palette.common.black,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        // backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        fontSize: '2rem',
        fontWeight: 800,
        padding: `${theme.spacing(2)}px`,
        paddingBottom: 0,
    },
    imageDescription: {
        position: 'relative',
        padding: `${theme.spacing(2)}px`,
        paddingBottom: 0,
    },
    button: {
        margin: theme.spacing(1),
    },
    button: {
        margin: theme.spacing(1),
    },
    arrange: {
        marginTop: theme.spacing(1),
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

function Paket(props) {
    const classes = useStyles();
    const [status, setStatus] = useState("verifikasi");
    const statuses = ["verifikasi", "pembayaran", "verified"]

    const next = (event) => {
        event.preventDefault()
        if (status === "verifikasi") {
            setStatus("pembayaran")
        } else if (status === "pembayaran") {
            setStatus("verified")
        } else {
            setStatus("verifikasi")
        }
    }

    var dashboardContent;

    if (status === "verifikasi") {
        dashboardContent = (
            <Typography style={{ paddingBottom: '1rem' }}>
                Saat ini aku kamu sedang dalam proses verifikasi oleh tim TokoKoperasi. Tunggu ya, ga lama kok!
            </Typography>
        )
    } else if (status === "pembayaran") {
        dashboardContent = (
            <div>
                <Typography style={{ paddingBottom: '1rem' }}>
                    Akun anda telah di setujui oleh pihak tokoKoperasi. <b> Tinggal satu langkah lagi</b> dan anda dapat memanfaatkan fitur tokoKoperasi.
                </Typography>
                <Typography style={{ paddingBottom: '1rem' }}>
                    Untuk menyelesaikan pendaftaran, silahkan lakukan pembayaran dibawah ini
                </Typography>
                <Card className={classes.card}>
                    <CardContent>
                        <Grid
                            container
                            spacing={0}
                            alignItems="center"
                            justify="center"
                            style={{ minheight: '100vh' }}
                        >
                            <Typography variant="h5" component="h2">
                                <Box>1923012912891</Box>
                            </Typography>
                        </Grid>
                        <Typography className={classes.pos} color="textSecondary">
                            {/* Daftar Kekayaan Saat Ini */}
                        </Typography>
                        <Typography variant="body2" component="p" className={classes.arrange}>
                            <Box >Lakukan pembayaran ke Virtual Account tersebut dengan metode pembayaran yang anda inginkan.</Box>
                        </Typography>
                        <Typography fontWeight={800} variant="body2" component="p" className={classes.arrange}>
                            <Box fontWeight={800}>Mohon lakukan sebelum 05 September 2019</Box>
                        </Typography>
                    </CardContent>
                </Card>

            </div>
        )
    } else {
        dashboardContent = (
            <div>
                <Typography style={{ paddingBottom: '1rem' }}>
                    Selamat akun anda telah di setujui!
                    Saatnya lakukan transkasi sesudai keinginan kamu
                </Typography>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => props.history.push('/dashboard/simpanan')}>
                    Simpanan
                </Button>
                <Button variant="contained" color="primary" className={classes.button} onClick={() => props.history.push('/dashboard/pinjaman')}>
                    Pinjaman
                </Button>
                <Kekayaan />
            </div>
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
                                Selamat Datang!
                            </Typography>
                            <Typography>
                                Satria Sipayung
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

export default Paket;
