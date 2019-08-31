import React, { useState } from 'react';
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
        paddingBottom: 0,
    },
    imageDescription: {
        position: 'relative',
        paddingBottom: 0,
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
    const [nominal, setNominal] = useState('');
    const [banyakAngsuran, setBanyakAngsuran] = useState('');
    const [nominalAngsuran, setNominalAngsuran] = useState('');

    var hasilSimulasi;
    if (nominal) {
        hasilSimulasi = (
            <Card className={classes.card}>
                <CardContent>
                    <div variant="h5" component="h2">
                        Hasil Simulasi
                    </div>
                    <div variant="body2" component="p" className={classes.arrange}>
                        <div>Angsuran Pokok</div>
                        <div>Rp 1,000,000</div>
                    </div>
                    <div variant="body2" component="p" className={classes.arrange}>
                        <div>Jasa</div>
                        <div>Rp 100,000</div>
                    </div>
                    <div fontWeight={800} variant="body2" component="p" className={classes.arrange}>
                        <Box fontWeight={800}>Total</Box>
                        <Box fontWeight={800}>Rp 1,100,000</Box>
                    </div>
                    <div variant="body2" component="p" className={classes.arrange}>
                        <div>Dibayar (bulan)</div>
                        <div>10 bulan</div>
                    </div>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        style={{ bottomMargin: 0 }}
                        onClick={() => props.history.push('/status/pinjaman')}
                    >
                        Ajukan Pinjaman
                </Button>
                </CardContent>
            </Card>

        )
    }

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} style={{ paddingBottom: '0.5rem' }}>
                        <div className={classes.titles}>
                            <Typography component="h1" variant="h5" style={{ fontWeight: 800 }}>
                                Simulasi Pinjaman
                            </Typography>
                        </div>
                    </div>
                    <Card className={classes.card}>
                        <CardContent>
                            <form className={classes.form} onSubmit={(event) => {
                                event.preventDefault();
                                setNominal("Rp. 10.000.000,00");
                                setBanyakAngsuran("Rp. 1 kali");
                                setNominalAngsuran("Rp. 500.000,00");
                            }} noValidate>
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    placeholder="Rp. 100.000,00"
                                    id="nominal"
                                    label="Nominal"
                                    name="nominal"
                                    autoComplete="nominal"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="nominal_angsuran"
                                    label="Banyak Angsuran"
                                    name="nominal_angsuran"
                                    placeholder="1 kali"
                                    autoComplete="nominal_angsuran"
                                    autoFocus
                                />
                                <TextField
                                    variant="outlined"
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="nominal_angsuran"
                                    label="Nominal Angsuran"
                                    name="nominal_angsuran"
                                    placeholder="Rp. 500.000,00"
                                    autoComplete="nominal_angsuran"
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    style={{ marginBottom: 0 }}
                                >
                                    Lakukan Simulasi
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                    {hasilSimulasi}
                </Container>
            </header >
        </div >
    );
}

export default Simpanan;
