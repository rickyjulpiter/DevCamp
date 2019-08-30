import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Mascot from './assets/mascot.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Button, Box } from '@material-ui/core';

const image = {
    url: '/static/images/grid-list/breakfast.jpg',
    title: 'GOLD',
    color: '#DAA520',
    description: 'Asuransi Kesehatan, Angsuran Kematian, Bunga Simpanan TERBESAR 2%',
    width: '50%',
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
                                Paket <a style={{ color: image.color }}>{image.title}</a>
                            </Typography>
                        </div>
                    </div>
                    <Typography component="div">
                        <Box fontWeight="fontWeightLight" m={1}>
                            Angsuran Kesehatan
                        </Box>
                        <Box fontWeight="fontWeightRegular" m={1}>
                            Angsuran Kematian
                        </Box>
                        <Box fontWeight="fontWeightMedium" m={1}>
                            Kode Voucher GOKIL
                        </Box>
                        <Box fontWeight={500} m={1}>
                            Bunga Simpanan Terbesar 2%
                        </Box>
                        <Box fontWeight="fontWeightBold" m={1}>
                            Bunga Pinjaman 5%
                        </Box>
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => props.history.push('/paket')}
                    >
                        adsjijadsi                    </Button>
                </Container>
            </header>
        </div >
    );
}

export default VerifikasiData;
