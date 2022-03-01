import React from 'react';

const SearchText = ({ searchWord, handleChange, handleMM }) => {
  // const usersData = [
  //   { id: 1, name: 'Tania', username: 'floppydiskette' },
  //   { id: 2, name: 'Craig', username: 'siliconeidolon' },
  //   { id: 3, name: 'Ben', username: 'benisphere' },
  // ];

  return (
    <section>
      <form>
        <input
          type="text"
          onChange={handleChange}
          value={searchWord}
          placeholder="Search"
          onInput={handleChange}
        />
      </form>

      <button onClick={handleMM}> Click me</button>
    </section>
  );
};

export default SearchText;
