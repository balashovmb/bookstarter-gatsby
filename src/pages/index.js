import React from 'react';
import App from '../components/App';
import UserContext from '../components/User/UserContext';

import './index.css'

import { user } from '../data/data';

const IndexPage = () => (
  <>
    <UserContext.Provider value={user}>
      <App />
    </UserContext.Provider>
  </>
)

export default IndexPage
