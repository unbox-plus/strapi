import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Flex from '../Flex';
import Padded from '../Padded';
import ModalSection from '../ModalSection';
import ModalTab from '../ModalTab';
import Hr from './Hr';
import BaselineAlignment from './BaselineAlignment';

const ModalNavWrapper = ({ children, links }) => {
  const [to, setTo] = useState(links[0].to);

  const handleGoTo = link => {
    setTo(link.to);
  };

  // TODO : integration
  return (
    <div style={{ maxHeight: '44rem', overflow: 'auto' }}>
      <Padded left right size="md">
        <BaselineAlignment />
        <Flex>
          {links.map(link => {
            const isActive = link.to === to;

            return (
              <ModalTab
                key={link.to}
                label={link.label}
                to={link.to}
                count={link.count}
                isActive={isActive}
                isDisabled={link.isDisabled}
                onClick={() => handleGoTo(link)}
              />
            );
          })}
        </Flex>
      </Padded>
      <ModalSection>
        <Hr />
      </ModalSection>
      {children(to)}
    </div>
  );
};

ModalNavWrapper.defaultProps = {
  links: [],
  to: '',
};

ModalNavWrapper.propTypes = {
  children: PropTypes.func.isRequired,
  links: PropTypes.array,
  to: PropTypes.string,
};

export default ModalNavWrapper;
