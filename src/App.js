import React, { useState } from 'react';
import './style.css';
import SearchText from './components/SearchText';

export default function App() {
  const [searchWord, setSearchWord] = useState('');

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];

  const handleChange = (e) => {
    setSearchWord(e.target.value);
  };

  const handleMM = () => {
    console.log(searchWord);
  };

  return (
    <section>
      <SearchText
        handleChange={handleChange}
        searchWord={searchWord}
        handleMM={handleMM}
      />
    </section>
  );
}
