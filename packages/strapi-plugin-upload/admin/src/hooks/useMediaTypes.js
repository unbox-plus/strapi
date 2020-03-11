import { useContext } from 'react';
import MediaTypesContext from '../contexts/MediaTypesContext';

const useMediaTypes = () => useContext(MediaTypesContext);

export default useMediaTypes;
