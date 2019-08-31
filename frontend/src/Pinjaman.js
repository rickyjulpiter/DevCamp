import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Mascot from './assets/mascot.png';
import { Button, Card, CardContent, CardActions, Box, TextField } from '@material-ui/core';
import Kekayaan from './components/Kekayaan';
import RiwayatCicilan from './components/RiwayatCicilan';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import conv from './components/Helper';

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
    const [cookies, setCookie] = useCookies('');
    const [cicilan, setCicilan] = useState(false);
    const headers = { headers: { "x-auth-token": `${cookies.token}` } };
    useEffect(() => {
        const fetch = async () => {
            axios.post("http://10.80.214.129:4000/api/v1/cicilan/", {}, headers)
                .then((res) => {
                    if (res.data.success) {
                        setCicilan(res.data.data);
                    } else {
                        setCicilan(false);
                    }
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetch();
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper} style={{ paddingBottom: '0.5rem' }}>
                        <div className={classes.titles}>
                            <Typography component="h1" variant="h5" style={{ fontWeight: 800 }}>
                                Pinjaman
                            </Typography>
                        </div>
                    </div>
                    {!cicilan && (
                        <Typography style={{ paddingBottom: '1rem' }}>
                            Anda belum memiliki pinjaman.
                        </Typography>
                    )}
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => props.history.push('/simulasi/pinjaman')}
                            style={{
                                marginBottom: 10,
                            }}
                        >
                            Ajukan Pinjaman
                        </Button>
                    </div>
                    {cicilan && (
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        Pembayaran Cicilan
                                </Typography>
                                    <form className={classes.form} noValidate>
                                        <TextField
                                            variant="outlined"
                                            margin="normal"
                                            required
                                            fullWidth
                                            disabled
                                            value={conv(cicilan.iuran)}
                                            id="nominal_simpanan"
                                            label="Nominal"
                                            name="nominal_simpanan"
                                            helperText={`Iuran cicilan ke ${cicilan.urutan}`}
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
                            <RiwayatCicilan />
                        </div>
                    )}

                </Container>
            </header>
        </div >
    );
}

export default Pinjaman;
