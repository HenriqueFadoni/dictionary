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

export default editDictionary;