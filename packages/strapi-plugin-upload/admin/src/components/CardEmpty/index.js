import React from 'react';
import CardImgWrapper from '../CardImgWrapper';
import Bar from './Bar';
import Wrapper from './Wrapper';

const CardEmpty = () => {
  return (
    <Wrapper>
      <CardImgWrapper withOverlay isSmall />
      <Bar isSmall />
      <Bar />
    </Wrapper>
  );
};

export default CardEmpty;