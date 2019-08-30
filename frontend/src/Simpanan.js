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
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
    },
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
                                    onClick={() => props.history.push('/checkout')}
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
                                    onClick={() => props.history.push('/checkout')}
                                >
                                    Lakukan Pembayaran
                            </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Kekayaan />
                </Container>
            </header >
        </div >
    );
}

export default Simpanan;
