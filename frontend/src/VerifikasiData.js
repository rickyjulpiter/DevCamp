import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Mascot from './assets/mascot.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Box } from '@material-ui/core';

const image = {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'GOLD',
    color: '#DAA520',
    description: 'Asuransi Kesehatan, Angsuran Kematian, Bunga Simpanan TERBESAR 2%',
    width: '100%',
    slug: 'gold',
}

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        // flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    imageTitle: {
        position: 'relative',
        fontSize: '1.5rem',
        fontWeight: 800,
    },
    image: {
        display: 'flex',
        flexDirection: 'column',
    }
}));

function VerifikasiData(props) {
    const classes = useStyles();
    const slug = props.match.params.slug;

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <div className={classes.titles}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                className={classes.imageTitle}
                                fontWeight="fontWeightBold"
                            >
                                Wahh Keren, Kamu Berhasil 
                                Memilih Paket <a style={{ color: image.color }}>{image.title}</a>
                            </Typography>
                        </div>
                    </div>
                    <Typography style={{ paddingBottom: '1rem' }}>
                        Nah tinggal satu tahap lagi nih, untuk bisa menjadi
                        anggota tokoKoperasi
                    </Typography>
                    <Paper
                            className={classes.image}
                            style={{
                                width: image.width,
                                backgroundColor: 'lightblue'
                            }}
                            onClick={() => props.history.push(`/paket/${image.slug}`)}
                        >
                            <span
                                className={classes.imageSrc}
                                style={{
                                    backgroundImage: `url(${image.url})`,
                                }}
                            />
                            <span className={classes.imageBackdrop} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                >
                                    Kamu harus upload foto KTP dan diri kamu agar
                                    kami bisa verifikasi data kamu
                                </Typography>
                            </span>
                        </Paper>
                        <Paper
                            className={classes.image}
                            style={{
                                marginTop: '1rem',
                                width: image.width,
                            }}
                        >
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    className={classes.imageTitle}
                                >
                                    Foto KTP
                                </Typography>
                            </span>
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                >
                                    satria.png
                                </Typography>
                                <Button
                                    component="span"
                                    variant="subtitle1"
                                    variant="contained"
                                >
                                    Upload KTP
                                </Button>
                            </span>
                        </Paper>
                        <Paper
                            key={image.title}
                            className={classes.image}
                            style={{
                                marginTop: '1rem',
                                width: image.width,
                            }}
                        >
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    className={classes.imageTitle}
                                >
                                    Foto Dirimu dengan KTP
                                </Typography>
                            </span>
                            <span className={classes.imageButton}>
                            <Typography
                                    component="span"
                                    variant="subtitle1"
                                >
                                    satria.png
                                </Typography>
                                <Button
                                    component="span"
                                    variant="subtitle1"
                                    variant="contained"
                                >
                                    Upload KTP
                                </Button>
                            </span>
                        </Paper>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => props.history.push('/dashboard')}
                    >
                        adsjijadsi                    </Button>
                </Container>
            </header>
        </div >
    );
}

export default VerifikasiData;
