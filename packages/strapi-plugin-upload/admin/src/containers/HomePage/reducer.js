import { fromJS } from 'immutable';

const initialState = fromJS({
  data: [],
  dataCount: 0,
  dataToDelete: [],
  mediaTypes: {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_DATA_SUCCEEDED':
      return state.update('data', () => action.data);
    case 'GET_DATA_COUNT_SUCCEEDED':
      return state.update('dataCount', () => action.count);
    case 'GET_MEDIA_TYPES_SUCCEEDED':
      return state.update('mediaTypes', () => action.data);
    case 'ON_CHANGE_DATA_TO_DELETE': {
      const { value, id } = action;

      if (value) {
        return state.update('dataToDelete', dataToDelete => {
          return dataToDelete.push(id);
        });
      }
      const index = state.get('dataToDelete').findIndex(item => item === id);

      return state.removeIn(['dataToDelete', index]);
    }
    default:
      return state;
  }
};

export default reducer;
export { initialState };
