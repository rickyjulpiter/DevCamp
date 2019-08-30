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
        fontSize: '2rem',
        fontWeight: 800,
    },
}));

function PaketInfo(props) {
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
                        {'\u2022'} Angsuran Kesehatan
                        </Box>
                        <Box fontWeight="fontWeightLight" m={1}>
                        {'\u2022'} Angsuran Kematian
                        </Box>
                        <Box fontWeight="fontWeightLight" m={1}>
                        {'\u2022'} Kode Voucher <b>GOKIL</b>
                        </Box>
                        <Box fontWeight="fontWeightLight" m={1}>
                        {'\u2022'} Bunga Simpanan <b>Terbesar</b> 2%
                        </Box>
                        <Box fontWeight="fontWeightLight" m={1}>
                        {'\u2022'} Bunga Pinjaman 5%
                        </Box>
                    </Typography>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={() => props.history.push('/order/gold')}
                    >
                        Saya mau paket ini
                    </Button>
                </Container>
            </header>
        </div >
    );
}

export default PaketInfo;
