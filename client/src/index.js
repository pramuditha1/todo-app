import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import combined reducer
import reducers from './reducers';

import App from './App';
import './index.css';

import { Auth0Provider } from "@auth0/auth0-react";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const AUTH0_DOMAIN = 'dev-be2qpc6h.us.auth0.com';
const AUTH0_CLIENT_ID = 'r7vESzEcKEV9bu1RH4teq8Mgl8YmNzSx';

ReactDOM.render(
    <Provider store={store}>
        <Auth0Provider
            domain={AUTH0_DOMAIN}
            clientId={AUTH0_CLIENT_ID}
            redirectUri={window.location.origin}>
            <App />
        </Auth0Provider>
    </Provider>
, document.getElementById('root'))