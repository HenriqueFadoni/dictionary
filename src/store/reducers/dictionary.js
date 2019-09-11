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
  const newDictionaryList = state.dictionaryList.filter(dictionary => {
    return dictionary.id !== action.id
  });

  return {
    ...state,
    dictionaryList: newDictionaryList
  };
};

const editDictionary = (state, action) => {
  const newDictionaryList = state.dictionaryList.map(dictionary => {
    if (dictionary.id === action.id) {
      return {
        ...dictionary,
        name: action.newName
      }
    } else {
      return
    }
  });

  return {
    ...state,
    dictionaryList: newDictionaryList
  };
};

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATING_DICTIONARY: return createDictionary(state, action);
    case actionTypes.DELETING_DICTIONARY: return deleteDictionary(state, action);
    case actionTypes.EDITING_DICTIONARY: return editDictionary(state, action);
    default: return state;
  };
};

export default dictionary;