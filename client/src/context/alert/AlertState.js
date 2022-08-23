import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import { SET_ALERT, REMOVE_ALERT } from '../types';

const AlertState = (props) => {
  const initialState = {
    activeAlert: false,
  };

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set and Remove Alert
  const setAlert = (timeout = 5000) => {
    dispatch({
      type: SET_ALERT,
      payload: true,
    });

    setTimeout(
      () =>
        dispatch({
          type: REMOVE_ALERT,
          payload: false,
        }),
      timeout
    );
  };

  return (
    <AlertContext.Provider
      value={{
        alert: state.alert,
        setAlert,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
