/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Label } from '@buffetjs/core';
import styled from 'styled-components';

import ModalStepper from '../InputModalStepper';
import CardPreview from '../CardPreview';

const Name = styled(Label)`
  display: block;
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

const InputMedia = ({ label, onChange, name, attribute }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickToggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // TODO Integration
  return (
    <>
      <Name htmlFor={name}>{label}</Name>
      <div
        style={{ position: 'relative', height: '20rem', marginBottom: '2rem' }}
        onClick={handleClickToggleModal}
      >
        <CardPreview url="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" />
      </div>

      {isModalOpen && (
        <ModalStepper
          multiple={attribute.multiple}
          isOpen={isModalOpen}
          onChange={onChange}
          onToggle={handleClickToggleModal}
        />
      )}
    </>
  );
};

InputMedia.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  attribute: PropTypes.shape({
    type: PropTypes.string,
    multiple: PropTypes.bool,
    required: PropTypes.bool,
  }).isRequired,
};
InputMedia.defaultProps = {
  label: '',
};

export default InputMedia;
