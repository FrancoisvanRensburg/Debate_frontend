import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Layout from '../../routes/Layout/TopNav';

const Welcome = () => {
  return (
    <Fragment>
      <Layout />
      <div style={{ display: 'flex', gap: 50, margin: '40vh 40vw' }}>
        <Link className='btn btn-primary' to='/signup'>
          Sign up
        </Link>
        <Link className='btn btn-primary' to='/signin'>
          Sign in
        </Link>
      </div>
    </Fragment>
  );
};

export default withRouter(Welcome);
