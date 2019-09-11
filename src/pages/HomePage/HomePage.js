import React, { useState } from 'react';

import Form from './Form/Form';
import DictionaryList from './DictionaryList/DictionaryList';

const HomePage = () => {
  const [dictionaries, setDictionaries] = useState([]);

  const createDictionary = event => {
    event.preventDefault()

    const name = event.target.dictionaryName.value;
    if (name.trim() !== '') {
      setDictionaries([
        ...dictionaries,
        {
          name,
          items: []
        }
      ]);
    }
  }

  const deleteDictionary = id => {
    const newDictionaries = dictionaries.filter((dictionary, index) => index !== id);
    setDictionaries(newDictionaries);
  }

  return (
    <div>
      <Form createDictionary={createDictionary} />
      <DictionaryList
        dictionaries={dictionaries}
        deleteDictionary={deleteDictionary}
      />
    </div>
  );
}

export default HomePage;