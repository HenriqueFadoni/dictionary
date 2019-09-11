import React from 'react';

import Dictionary from './Dictionary/Dictionary';

const DictionaryList = props => {
  const { dictionaries } = props;

  const list = dictionaries.map((dictionary, index) => (
    <Dictionary
      key={index}
      id={index}
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