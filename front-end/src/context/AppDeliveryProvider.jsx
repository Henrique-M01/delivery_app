/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppDeliveryContext from './AppDeliveryContext';

export default function AppDeliveryProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const VALUE = { isLogged, setIsLogged };

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLogged && location.pathname !== '/register') navigate('/login');
  }, []);

  return (
    <AppDeliveryContext.Provider value={ VALUE }>
      {children}
    </AppDeliveryContext.Provider>
  );
}

AppDeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
