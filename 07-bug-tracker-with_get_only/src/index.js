import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

import BugTracker from './bugTracker';
import Spinner from './spinner';

import appStore from './store';
import axios from 'axios';

window['axios'] = axios;

ReactDOM.render(
    <Provider store={appStore}>
        <div>
            <Spinner/>
            <BugTracker/>
        </div>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
