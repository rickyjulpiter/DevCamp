import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Mascot from './assets/mascot.png';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardActions, Box } from '@material-ui/core';

const simpanan = [
    {
        name: "Simpanan Wajib",
        price: "Rp. 8.000.000,00"
    },
    {
        name: "Simpanan Pokok",
        price: "Rp. 9.000.000,00"
    },
    {
        name: "Simpanan Sukarela",
        price: "Rp. 19.000.000,00"
    },
    {
        name: "Simpanan SHU",
        price: "Rp. 3.000.000,00"
    },
]

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

function Simpanan(props) {
    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} style={{ paddingBottom: '0.5rem' }}>
                        <div className={classes.titles}>
                            <Typography component="h1" variant="h5" style={{ fontWeight: 800 }}>
                                Mau nabung apa?
                            </Typography>
                        </div>
                    </div>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Simpanan Wajib
                        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {/* Daftar Kekayaan Saat Ini */}
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    disabled
                                    value="Rp. 100.000,00"
                                    id="nominal_simpanan"
                                    label="Nominal"
                                    name="nominal_simpanan"
                                    helperText="Simpanan wajib yang belum lunas"
                                    autoComplete="nominal_simpanan"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Lakukan Pembayaran
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Simpanan Sukarela
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {/* Daftar Kekayaan Saat Ini */}
                            </Typography>
                            <form className={classes.form} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    type="number"
                                    id="nominal_simpanan"
                                    label="Nominal"
                                    name="nominal_simpanan"
                                    autoComplete="nominal_simpanan"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Lakukan Pembayaran
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                Simulasi Simpanan
                        </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {/* Daftar Kekayaan Saat Ini */}
                            </Typography>
                            {simpanan.map(kekayaan => (
                                <Typography variant="body2" component="p" className={classes.arrange}>
                                    <div>{kekayaan.name}</div>
                                    <div>{kekayaan.price}</div>
                                </Typography>
                            ))}
                            <Typography fontWeight={800} variant="body2" component="p" className={classes.arrange}>
                                <Box fontWeight={800}>Kekayaan Total</Box>
                                <Box fontWeight={800}>Rp. 39.000.000,00</Box>
                            </Typography>
                        </CardContent>
                    </Card>
                </Container>
            </header >
        </div >
    );
}

export default Simpanan;
