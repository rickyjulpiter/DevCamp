import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardContent, CardActions, Box } from '@material-ui/core';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import conv from './Helper';

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

function Kekayaan(props) {
    // return null
    const classes = useStyles();
    const [cookies, setCookie] = useCookies('');
    const [simpanan, setSimpanan] = useState([{}]);
    const data = { headers: { "x-auth-token": `${cookies.token}` } };
    useEffect(() => {
        const fetch = async () => {
            axios.get("http://10.80.214.129:4000/api/v1/report/harta", data)
                .then((res) => {
                    const data = res.data.data;
                    setSimpanan([
                        {
                            name: "Simpanan Wajib",
                            price: data.wajib
                        },
                        {
                            name: "Simpanan Pokok",
                            price: data.pokok
                        },
                        {
                            name: "Simpanan Sukarela",
                            price: data.sukarela
                        },
                        {
                            name: "Simpanan SHU",
                            price: data.shu
                        }
                    ]);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        fetch();
    }, [])

    return (
        <Card className={classes.card} style={{ marginTop: '1rem' }}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Daftar Kekayaan
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {/* Daftar Kekayaan Saat Ini */}
                </Typography>
                {simpanan.map((kekayaan, i) => (
                    <div variant="body2" component="p" className={classes.arrange} key={i}>
                        <div>{kekayaan.name}</div>
                        <div>{conv(kekayaan.price)}</div>
                    </div>
                ))}
                <div variant="body2" component="p" className={classes.arrange}>
                    <Box fontWeight={800}>Kekayaan Total</Box>
                    <Box fontWeight={800}>{conv(simpanan.reduce((total, data) => { return total + data.price }, 0))}</Box>
                </div>
            </CardContent>
        </Card>
    )
}

export default Kekayaan;