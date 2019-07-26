import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LocationCard from './LocationCard';

export default function LocationsList() {
  const [locationsData, setLocationsData] = useState([]);

  useEffect(() => {

    axios.get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        setLocationsData(response.data.results);
      })
  }, [])

  return (
    <section className='location-list grid-view'>
      {locationsData.map((loc) => {
        return (
          <LocationCard location={loc} />
        )
      })}
    </section>
  )
}
