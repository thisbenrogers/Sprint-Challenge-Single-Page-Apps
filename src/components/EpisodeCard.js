import React from 'react'
import { Card } from 'semantic-ui-react'

export default function EpisodeCard({ ...props }) {
  // image={image}

  const { name, episode, air_date } = props.episode;

  console.log(name);

  return (
    <Card
      header={name}
      description={episode}
      extra={`Ari date: ${air_date}`} />
  )
}
