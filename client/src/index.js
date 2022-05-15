import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import combined reducer
import reducers from './reducers';

import App from './App';
import './index.css';
import Auth0ProviderWithHistory from "./auth0/auth0-provider-with-history";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <Auth0ProviderWithHistory>
            <App/>
        </Auth0ProviderWithHistory>
    </Provider>
, document.getElementById('root'))