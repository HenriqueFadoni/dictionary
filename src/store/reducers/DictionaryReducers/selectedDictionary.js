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

export default selectedDictionary;
