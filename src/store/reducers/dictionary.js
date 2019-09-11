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

const deleteDictionary = (state, action) => {
  const newDictionaryList = state.dictionaryList.filter((dictionary, index) => {
    return dictionary.id !== action.id
  });

  return {
    ...state,
    dictionaryList: newDictionaryList
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATING_DICTIONARY: return createDictionary(state, action);
    case actionTypes.DELETING_DICTIONARY: return deleteDictionary(state, action);
    default: return state;
  }
}

export default reducer;