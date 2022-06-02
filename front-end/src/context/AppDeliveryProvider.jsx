/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from 'prop-types';

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AppDeliveryContext from './AppDeliveryContext';

export default function AppDeliveryProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const VALUE = { isLogged, setIsLogged };

  const navigate = useNavigate();

  useEffect(() => {
    // if (!isLogged) navigate('/login');
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
