import React from 'react';
import { Button } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
        <Button variant='contained' color="secondary"  onClick={() => logout()}>Logout</Button>
    )
  )
}

export default LogoutButton