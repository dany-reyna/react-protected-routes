import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../../auth/fakeAuth';

const SignInPage = ({ location }) => {
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);
  const { referrer } = location.state || { referrer: { pathname: '/app' } };

  const signIn = () => {
    fakeAuth.signIn(() => setRedirectToReferrer(true));
  };

  if (redirectToReferrer === true || fakeAuth.isAuthenticated === true) {
    return <Redirect to={referrer} />;
  }

  return (
    <div>
      <p>
        {'Sign in to access:  '}
        {referrer.pathname}
      </p>
      <button type="button" onClick={signIn}>
        Sign in
      </button>
    </div>
  );
};

SignInPage.propTypes = {
  location: PropTypes.shape({
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.shape,
  }).isRequired,
};

export default SignInPage;
