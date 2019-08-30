import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ButtonBase from '@material-ui/core/ButtonBase';
import Mascot from './assets/mascot.png';

const images = [
    {
        url: '/static/images/grid-list/breakfast.jpg',
        title: 'Gold',
        color: '#FFFF33',
        width: '50%',
        slug: 'gold',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Silver',
        color: '#D3D3D3',
        width: '50%',
        slug: 'silver',
    },
    {
        url: '/static/images/grid-list/burgers.jpg',
        title: 'Bronze',
        color: '#CD7F32',
        width: '50%',
        slug: 'bronze',
    },
];

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
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
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
            height: 100,
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
        alignItems: 'center',
        justifyContent: 'center',
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
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.black,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
}));

function Paket(props) {
    const classes = useStyles();

    return (
        <div className="App">
            <header className="App-header">
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <div className={classes.titles}>
                            <Typography component="h1" variant="h5">
                                Selamat Datang
                            </Typography>
                            <Typography>
                                Anda belum punya paket.
                            </Typography>
                        </div>
                        <img width="15%" src={Mascot} alt="Mascot" />
                    </div>
                    <Typography>
                        Yuk pilih paket anda!
                    </Typography>
                    {images.map(image => (
                        <ButtonBase
                            focusRipple
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
                            <span className={classes.imageBackdrop} style={{ backgroundColor: image.color }} />
                            <span className={classes.imageButton}>
                                <Typography
                                    component="span"
                                    variant="subtitle1"
                                    color="inherit"
                                    className={classes.imageTitle}
                                >
                                    {image.title}
                                    <span className={classes.imageMarked} />
                                </Typography>
                            </span>
                        </ButtonBase>
                    ))}
                </Container>
            </header>
        </div >
    );
}

export default Paket;
