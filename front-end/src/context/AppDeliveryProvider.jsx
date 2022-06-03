import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AppDeliveryContext from './AppDeliveryContext';

function AppDeliveryProvider({ children, isLoggedIn }) {
  const [isLogged, setIsLogged] = useState(isLoggedIn);
  const VALUE = { isLogged, setIsLogged };

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) navigate('/login');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppDeliveryContext.Provider value={ VALUE }>
      { children }
    </AppDeliveryContext.Provider>
  );
}

AppDeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.loginInfo.isLoggedIn,
});

export default connect(mapStateToProps, null)(AppDeliveryProvider);
