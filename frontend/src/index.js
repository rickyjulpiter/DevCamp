import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Paket from './Paket';
import PaketInfo from './PaketInfo';
import VerifikasiData from './VerifikasiData';
import Dashboard from './Dashboard';
import Simpanan from './Simpanan';
import Pinjaman from './Pinjaman';
import Checkout from './Checkout';
import SimulasiPinjaman from './SimulasiPinjaman';
import SimulasiSimpanan from './SimulasiSimpanan';
import StatusPinjaman from './StatusPinjaman';

import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#42B549",
            contrastText: "white" //button text white instead of black
        },
    },
})

const routing = (
    <Router>
        <MuiThemeProvider theme={theme}>
            <Route exact path="/" component={App} />
            <Route exact path="/paket" component={Paket} />
            <Route exact path="/paket/:slug" component={PaketInfo} />
            <Route exact path="/order/gold" component={VerifikasiData} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/simpanan" component={Simpanan} />
            <Route exact path="/dashboard/pinjaman" component={Pinjaman} />
            <Route exact path="/simulasi/simpanan" component={SimulasiSimpanan} />
            <Route exact path="/simulasi/pinjaman" component={SimulasiPinjaman} />
            <Route exact path="/status/pinjaman" component={StatusPinjaman} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route path="/contact" component={Contact} /> */}
        </MuiThemeProvider>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
