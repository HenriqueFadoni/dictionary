import React from 'react';

import Dictionary from './Dictionary/Dictionary';

const DictionaryList = props => {
  const { dictionaries } = props;

  const list = dictionaries.map(dictionary => (
    <Dictionary 
      key={dictionary.id} 
      id={dictionary.id}
      name={dictionary.name}
    />
  ));

  return (
    <div>
      {list}
    </div>
  );
};

export default DictionaryList;