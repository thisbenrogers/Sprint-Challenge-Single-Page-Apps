import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    // * Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharactersData(response.data.results);
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {charactersData.map((char) => {
        return (
          <CharacterCard character={char} />
        )
      })}
    </section>
  )
}
