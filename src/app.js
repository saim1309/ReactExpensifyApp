import ReactDOM from 'react-dom';
import React from 'react';
import AppRouter from "./routers/AppRouter"
import 'normalize.css/normalize.css';
import './styles/styles.scss';


ReactDOM.render(<AppRouter />, document.getElementById('app'));
