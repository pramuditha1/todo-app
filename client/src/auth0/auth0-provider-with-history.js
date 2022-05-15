import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
//   const history = useNavigate();
  console.log(process.env);
  const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
  const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const AUTH0_AUDIANCE = process.env.REACT_APP_AUTH0_AUDIENCE;

//   const onRedirectCallback = (appState) => {
//     history.push(appState?.returnTo || window.location.pathname);
//   };

  return (
    <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        redirectUri={window.location.origin}
        // onRedirectCallback={onRedirectCallback}
        audience={AUTH0_AUDIANCE}>
            {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;