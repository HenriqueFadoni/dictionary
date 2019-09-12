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

export default createItem;