import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';

export default function CharacterList() {

  const [charactersData, setCharactersData] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        setCharactersData(response.data.results);
      })
  }, [])

  return (
    <section className='character-list grid-view'>
      {charactersData.map((char) => {
        return (
          <CharacterCard key={char.id} character={char} />
        )
      })}
    </section>
  )
}
