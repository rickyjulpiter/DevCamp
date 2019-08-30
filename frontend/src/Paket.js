import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Mascot from './assets/mascot.png';
import Paper from '@material-ui/core/Paper';

const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'GOLD',
        color: '#DAA520',
        description: 'Asuransi Kesehatan, Angsuran Kematian, Bunga Simpanan TERBESAR 2%',
        width: '100%',
        slug: 'gold',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'SILVER',
        color: '#C0C0C0',
        description: 'Angsuran Kesehatan, Bunga Simpanan 1,6% Bunga Pinjaman HANYA 2%',
        width: '100%',
        slug: 'silver',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'BRONZE',
        color: '#CD7F32',
        description: 'Bunga Pinjaman TERMURAH hanya 1,5% dan Bonus Lainnya',
        width: '100%',
        slug: 'bronze',
    },
];

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
}));

function Paket(props) {
    const classes = useStyles();

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
                    <Typography style={{ paddingBottom: '1rem' }}>
                        Yuk pilih jenis keanggotaan yang kamu mau !
                    </Typography>

                    {images.map(image => (
                        <Paper
                            key={image.title}
                            className={classes.image}
                            style={{
                                width: image.width,
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
                                    className={classes.imageTitle}
                                    fontWeight="fontWeightBold"
                                >
                                    Paket <a style={{ color: image.color }}>{image.title}</a>
                                </Typography>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageDescription}
                                    fontWeight="fontWeightBold"
                                >
                                    {image.description}
                                </Typography>
                            </span>
                        </Paper>
                    ))}
                </Container>
            </header>
        </div >
    );
}

export default Paket;
