import React from 'react';

import BrowseAssets from '../BrowseAssets';
import ModalNavWrapper from '../ModalNavWrapper';
import ModalSection from '../ModalSection';
import SelectedAssets from '../SelectedAssets';
import useDataManager from '../../hooks/useDataManager';

const ListModal = () => {
  const { selectedFiles } = useDataManager();
  const links = [
    { to: 'browse', label: 'browse', isDisabled: false },
    { to: 'selected', label: 'selected', count: selectedFiles.length, isDisabled: false },
  ];

  return (
    <ModalNavWrapper links={links}>
      {to => (
        <ModalSection>
          {to === 'browse' && <BrowseAssets />}
          {to === 'selected' && <SelectedAssets />}
        </ModalSection>
      )}
    </ModalNavWrapper>
  );
};

export default ListModal;
