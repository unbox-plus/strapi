import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import CardImgWrapper from '../CardImgWrapper';
import CardPreview from '../CardPreview';
import Tag from '../Tag';
import Wrapper from './Wrapper';
import TitleWrapper from './TitleWrapper';
import Title from './Title';
import ErrorMessage from './ErrorMessage';
import Border from './Border';

import formatBytes from '../../utils/formatBytes';
import useMediaTypes from '../../hooks/useMediaTypes';

const Card = ({
  checked,
  children,
  errorMessage,
  hasError,
  mime,
  name,
  small,
  size,
  type,
  url,
}) => {
  const {
    mediaTypes: { mimeTypes },
  } = useMediaTypes();
  console.log('card', size, mimeTypes, mime, type);

  const getType = () => {
    return mime || type;
  };

  const getSize = () => {
    return formatBytes(size, 0);
  };

  const getKind = () => {
    const kind = getType().split('/')[0];

    if (kind === 'application') {
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
      <CardImgWrapper checked={checked} small={small}>
        <CardPreview hasError={hasError} url={url} type={mime || type} />
        <Border color={hasError ? 'orange' : 'mediumBlue'} shown={checked || hasError} />
        {children}
      </CardImgWrapper>
      <TitleWrapper>
        <Title fontSize="md" fontWeight="bold" ellipsis>
          {name}
        </Title>
        <Tag label={getKind()} />
      </TitleWrapper>
      <Text color="grey" fontSize="xs" ellipsis>{`${getExtension()} - ${getSize()}`}</Text>
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

Card.defaultProps = {
  checked: false,
  children: null,
  errorMessage: null,
  hasError: false,
  mime: null,
  name: null,
  size: 0,
  small: false,
  type: null,
  url: null,
};

Card.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  errorMessage: PropTypes.string,
  hasError: PropTypes.bool,
  mime: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.number,
  small: PropTypes.bool,
  type: PropTypes.string,
  url: PropTypes.string,
};

export default Card;
