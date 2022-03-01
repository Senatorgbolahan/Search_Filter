import React from 'react';
import './style.css';
import SearchText from './components/SearchText';

export default function App() {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];

  return (
    <section>
      <SearchText />
    </section>
  );
}
