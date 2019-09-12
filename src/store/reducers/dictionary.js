import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dictionaryList: [],
  selectedDictionary: null,
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
      return dictionary
    }
  });

  return {
    ...state,
    dictionaryList: newDictionaryList
  };
};

const selectedDictionary = (state, action) => {
  let selected = null;
  state.dictionaryList.forEach(dic => {
    if (dic.id === action.id) {
      selected = dic
    }
  });

  return {
    ...state,
    selectedDictionary: selected
  }
}

const createItem = (state, action) => {
  const updateDictionary = {
    ...state.selectedDictionary,
    items: [
      ...state.selectedDictionary.items,
      {
        domain: action.domain,
        range:  action.range
      }
    ]
  }

  const newDicList = state.dictionaryList.map(dic => {
    if (dic.id === state.selectedDictionary.id) {
      return updateDictionary
    } else {
      return dic
    }
  })

  return {
    ...state,
    dictionaryList: newDicList,
    selectedDictionary: updateDictionary
  }
}

const dictionary = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATING_DICTIONARY: return createDictionary(state, action);
    case actionTypes.DELETING_DICTIONARY: return deleteDictionary(state, action);
    case actionTypes.EDITING_DICTIONARY: return editDictionary(state, action);
    case actionTypes.SELECTED_DICTIONARY: return selectedDictionary(state, action);
    case actionTypes.CREATE_ITEM: return createItem(state, action);
    default: return state;
  };
};

export default dictionary;