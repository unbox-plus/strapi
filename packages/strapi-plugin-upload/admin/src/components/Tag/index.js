import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Wrapper from './Wrapper';

const Tag = ({ label }) => {
  return (
    <Wrapper>
      <Text color="grey" fontWeight="bold">
        {label}
      </Text>
    </Wrapper>
  );
};

Tag.defaultProps = {
  label: null,
};

Tag.propTypes = {
  label: PropTypes.string,
};

export default Tag;
