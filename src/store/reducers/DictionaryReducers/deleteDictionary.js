const deleteDictionary = (state, action) => {
  const newDictionaryList = state.dictionaryList.filter(dictionary => {
    return dictionary.id !== action.id
  });

  return {
    ...state,
    dictionaryList: newDictionaryList
  };
};

export default deleteDictionary;