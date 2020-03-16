import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from '@buffetjs/core';

import Text from '../Text';
import CardImgWrapper from '../CardImgWrapper';
import CardPreview from '../CardPreview';
import Wrapper from './Wrapper';
import Title from './Title';

import formatBytes from '../../utils/formatBytes';

// TODO - adapt with the real data
const Card = ({ checked, id, name, size, small, type, onChange, url }) => {
  const getType = () => {
    return mime || type;
  };

  const getSize = () => {
    return formatBytes(size, 0);
  };

  const getKind = () => {
    const kind = getType().split('/')[0];

    if (kind !== 'image' && kind !== 'video') {
      return 'file';
    }

    return kind;
  };

  const getExtension = () => {
    return getType()
      .split('/')[1]
      .toUpperCase();
  };

  return (
    <Wrapper>
      <div>
        <CardImgWrapper small={small} checked={checked}>
          <CardPreview type={type} url={url} />
          <div className="card-control-wrapper">
            <Checkbox name={`${id}`} onChange={onChange} value={checked} />
          </div>
        </CardImgWrapper>
        <Title fontSize="md" fontWeight="bold" ellipsis>
          {name}
        </Title>
        <Text color="grey" fontSize="xs" ellipsis>{`${type} - ${size}`}</Text>
      </div>
    </Wrapper>
  );
};

Card.defaultProps = {
  checked: false,
  name: null,
  onChange: () => {},
  size: 0,
  small: false,
  type: null,
  url: null,
};

Card.propTypes = {
  checked: PropTypes.bool,
  name: PropTypes.string,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.number,
  small: PropTypes.bool,
  type: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
