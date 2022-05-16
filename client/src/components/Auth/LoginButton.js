import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const loginRequestHandle = async () => {
    await loginWithRedirect();
  }

  return (
    !isAuthenticated && (
        <Button variant='contained' color="primary" onClick={loginRequestHandle}>
            Sign In
        </Button>
    )
  )
}

export default LoginButton