/* eslint-disable no-fallthrough */
import produce from 'immer';

const initialState = {
  selectedFiles: [],
  files: [],
  params: {
    _limit: 100,
    _start: 0,
    _q: '',
  },
  currentStep: 'list',
  filters: [],
};

const reducer = (state, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draftState => {
    switch (action.type) {
      case 'GET_DATA_SUCCEEDED': {
        draftState.files = action.data;
        break;
      }
      case 'SET_PARAM': {
        const { name, value } = action.param;

        if (name === 'filters') {
          draftState.filters.push(value);
          break;
        }

        draftState.params[name] = value;
        break;
      }
      case 'ON_FILE_SELECTION': {
        const { value, id } = action;

        if (value) {
          draftState.selectedFiles.push(id);
          break;
        }
        const index = draftState.selectedFiles.findIndex(item => item === id);

        draftState.selectedFiles.splice(index, 1);
        break;
      }
      case 'TOGGLE_SELECT_ALL': {
        const isSelected = draftState.files.length === draftState.selectedFiles.length;

        if (isSelected) {
          draftState.selectedFiles = [];
          break;
        }

        draftState.selectedFiles = Array.from(new Set(draftState.files), file => file.id);
        break;
      }
      case 'REMOVE_FILTER': {
        const { filterToRemove } = action;

        draftState.filters.splice(filterToRemove, 1);
        break;
      }
      case 'GO_TO': {
        draftState.currentStep = action.to;
        break;
      }
      case 'RESET_PROPS': {
        return initialState;
      }
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
