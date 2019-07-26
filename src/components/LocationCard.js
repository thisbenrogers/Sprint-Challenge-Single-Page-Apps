import React from 'react'
import { Card } from 'semantic-ui-react'

export default function LocationCard({ ...props }) {
  // image={image}

  const { name, type, dimension, residents } = props.location;

  return (
    <Card
      header={name}
      description={`${type} - ${dimension}`}
      meta={`${residents.length} residents`} />
  )
}
