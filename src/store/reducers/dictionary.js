import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dictionaryList: []
}

const createDictionary = (state, action) => {
  return {
    ...state,
    dictionaryList: [
      ...state.dictionaryList,
      {
        id: action.id,
        name: action.name,
        items: []
      },
    ]
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATING_DICTIONARY: return createDictionary(state, action);
    default: return state;
  }
}

export default reducer;