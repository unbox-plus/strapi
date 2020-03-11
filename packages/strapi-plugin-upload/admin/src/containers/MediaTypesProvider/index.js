import React from 'react';
import PropTypes from 'prop-types';

import MediaTypeContext from '../../contexts/MediaTypesContext';

function MediaTypesProvider({ children, ...rest }) {
  return <MediaTypeContext.Provider value={rest}>{children}</MediaTypeContext.Provider>;
}

MediaTypesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MediaTypesProvider;
