import React, { useEffect, useState } from 'react';
import axios from 'axios';

import EpisodeCard from './EpisodeCard';

export default function EpisodeList() {

  const [episodesData, setEpisodesData] = useState([]);

  console.log(episodesData);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/episode/')
      .then(response => {
        setEpisodesData(response.data.results);
      })
  }, [])

  return (
    <section className='episode-list grid-view'>
      {episodesData.map((ep) => {
        return (
          <EpisodeCard key={ep.id} episode={ep} />
        )
      })}
    </section>
  )
}
