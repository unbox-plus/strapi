import { useContext } from 'react';
import InputModalDataManagerContext from '../contexts/InputModal/InputModalDataManager';

const useDataManager = () => useContext(InputModalDataManagerContext);

export default useDataManager;
