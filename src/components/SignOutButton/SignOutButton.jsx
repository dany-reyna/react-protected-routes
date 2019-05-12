import React from 'react';
import history from '../../shared/history';
import fakeAuth from '../../auth/fakeAuth';

const SignOutButton = () => {
  const signOut = () => {
    fakeAuth.signOut(() => history.push('/app'));
  };

  return (
    <button type="button" onClick={signOut}>
      Sign out
    </button>
  );
};

export default SignOutButton;
