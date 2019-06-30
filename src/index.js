import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './css/App.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

import 'jquery/dist/jquery.js'
import 'popper.js/dist/umd/popper.js';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
