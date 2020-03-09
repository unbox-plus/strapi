import React from 'react';
import PropTypes from 'prop-types';

import InputModalStepperProvider from '../../containers/InputModalStepperProvider';
import InputModalStepper from './InputModalStepper';

const ModalStepper = ({ isOpen, onToggle, onChange }) => {
  return (
    <InputModalStepperProvider isOpen={isOpen}>
      <InputModalStepper isOpen={isOpen} onToggle={onToggle} onChange={onChange} />
    </InputModalStepperProvider>
  );
};

ModalStepper.defaultProps = {
  onToggle: () => {},
  onChange: () => {},
};

ModalStepper.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func,
  onChange: PropTypes.func,
};

export default ModalStepper;
