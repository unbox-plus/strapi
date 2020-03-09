import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import { request } from 'strapi-helper-plugin';
import { omitBy } from 'lodash';

import InputModalStepperContext from '../../contexts/InputModal/InputModalDataManager';
import getRequestUrl from '../../utils/getRequestUrl';
import init from './init';
import reducer, { initialState } from './reducer';

const InputModalStepperProvider = ({ isOpen, children }) => {
  const [reducerState, dispatch] = useReducer(reducer, initialState, init);
  const { params } = reducerState;

  useEffect(() => {
    if (isOpen) {
      fetchMediaLibFiles();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, params]);

  const removeFilter = index => {
    dispatch({
      type: 'REMOVE_FILTER',
      filterToRemove: index,
    });
  };

  const handleClose = () => {
    dispatch({
      type: 'RESET_PROPS',
    });
  };

  const handleFileSelection = ({ target: { name, value } }) => {
    dispatch({
      type: 'ON_FILE_SELECTION',
      id: parseInt(name, 10),
      value,
    });
  };

  const handleAllFileSelection = () => {
    dispatch({
      type: 'TOGGLE_SELECT_ALL',
    });
  };

  const setParam = param => {
    dispatch({
      type: 'SET_PARAM',
      param,
    });
  };

  const goTo = to => {
    dispatch({
      type: 'GO_TO',
      to,
    });
  };

  const fetchMediaLibFiles = async () => {
    const requestURL = getRequestUrl('files');

    const paramsToSend = omitBy(params, param => typeof param === 'string' && param === '');

    try {
      const data = await request(requestURL, {
        method: 'GET',
        params: paramsToSend,
      });

      dispatch({
        type: 'GET_DATA_SUCCEEDED',
        data,
      });
    } catch (err) {
      strapi.notification.error('notification.error');
    }
  };

  return (
    <InputModalStepperContext.Provider
      value={{
        ...reducerState,
        setParam,
        handleFileSelection,
        handleAllFileSelection,
        fetchMediaLibFiles,
        removeFilter,
        goTo,
        handleClose,
      }}
    >
      {children}
    </InputModalStepperContext.Provider>
  );
};

InputModalStepperProvider.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

InputModalStepperProvider.defaultProps = {
  isOpen: false,
};

export default InputModalStepperProvider;
