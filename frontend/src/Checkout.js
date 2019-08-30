import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Mascot from './assets/mascot.png';
import { Button, Card, CardContent, CardActions, Box , Grid} from '@material-ui/core';

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
        flexDirection: 'column',
        // justifyContent: 'space-between',
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

function Checkout(props) {
    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header" style={{marginTop:40}}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Card className={classes.card}>
                <CardContent>
                    <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{minheight: '100vh'}}
                    >
                        <Typography variant="h5" component="h2">
                            <Box>1923012912891</Box>
                        </Typography>
                    </Grid>    
                    <Typography className={classes.pos} color="textSecondary">
                        {/* Daftar Kekayaan Saat Ini */}
                    </Typography>
                    <Typography  variant="body2" component="p" className={classes.arrange}>
                        <Box >Lakukan pembayaran ke Virtual Account tersebut dengan metode pembayaran yang anda inginkan.</Box>
                    </Typography>
                    <Typography fontWeight={800} variant="body2" component="p" className={classes.arrange}>
                        <Box fontWeight={800}>Mohon lakukan sebelum 05 Septermber 2019</Box>
                    </Typography>
                </CardContent>
                </Card>
                </Container>
            </header>
        </div >
    );
}

export default Checkout;
