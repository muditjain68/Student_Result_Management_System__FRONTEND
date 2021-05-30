import React, { useState, useEffect } from 'react'
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'

const TheLayout = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();


  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push('/');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);


  return (
    <>
      {user?
      <>
      
      <div className="c-app c-default-layout">
            <TheSidebar/>
            <div className="c-wrapper">
              <TheHeader/>
              <div className="c-body">
                <TheContent/>
              </div>
              <TheFooter/>
            </div>
          </div>
        </>
        :<Button component={Link} to="/" variant="contained" color="primary">Sign In</Button>
      }
          </>


    
   
  )
}

export default TheLayout
