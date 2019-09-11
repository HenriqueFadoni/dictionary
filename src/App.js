import React, { useState } from 'react';

import CreateDicForm from './components/CreateDicForm'

const App = () => {
  const [dictionaries, setDictionaries] = useState([]);

  const createDictionary = event => {
    event.preventDefault()

    const name = event.target.dictionaryName.value;
    if (name.trim() !== '') {
      setDictionaries([
        ...dictionaries,
        name
      ]);
    }
  }

  return (
    <div className="App">
      <CreateDicForm createDictionary={createDictionary} />
    </div>
  );
}

export default App;
