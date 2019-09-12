const deleteItem = (state, action) => {
  const itemList = state.selectedDictionary.items;
  const newItemList = itemList.filter(item => item.id !== action.id);

  const updatedDictionary = {
    ...state.selectedDictionary,
    items: newItemList
  }

  return {
    ...state,
    dictionaryList: [
      ...state.dictionaryList,
      updatedDictionary
    ],
    selectedDictionary: updatedDictionary
  };
};

export default deleteItem;