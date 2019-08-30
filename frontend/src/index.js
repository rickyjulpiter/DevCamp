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

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/paket" component={Paket} />
            <Route exact path="/paket/:slug" component={PaketInfo} />
            <Route exact path="/order/gold" component={VerifikasiData} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/dashboard/simpanan" component={Simpanan} />
            <Route exact path="/dashboard/pinjaman" component={Pinjaman} />
            <Route exact path="/checkout" component={Checkout} />
            {/* <Route path="/contact" component={Contact} /> */}
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
