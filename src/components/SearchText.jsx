import React from 'react';

const SearchText = ({ searchWord, handleChange }) => {
  // const usersData = [
  //   { id: 1, name: 'Tania', username: 'floppydiskette' },
  //   { id: 2, name: 'Craig', username: 'siliconeidolon' },
  //   { id: 3, name: 'Ben', username: 'benisphere' },
  // ];

  return (
    <section>
      <input
        type="text"
        name="entry"
        onChange={handleChange}
        value={searchWord}
        placeholder="Search"
      />
    </section>
  );
};

export default SearchText;
