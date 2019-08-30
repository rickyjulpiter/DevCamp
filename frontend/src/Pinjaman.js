import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Mascot from './assets/mascot.png';
import { Button, Card, CardContent, CardActions, Box } from '@material-ui/core';
import Kekayaan from './components/Kekayaan';
import RiwayatCicilan from './components/RiwayatCicilan';

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
    button: {
        margin: theme.spacing(1),
    },
}));

function Pinjaman(props) {
    const classes = useStyles();
    var dashboardContent;

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
                    <Button variant="contained" className={classes.button} onClick={() => props.history.push('/simulasi/pinjaman')}>
                        Ajukan Pinjaman
                    </Button>
                    <Button variant="contained" className={classes.button} onClick={() => props.history.push('/dashboard/pinjaman')}>
                        Pembayaran Cicilan
                    </Button>
                    <RiwayatCicilan />
                </Container>
            </header>
        </div >
    );
}

export default Pinjaman;
