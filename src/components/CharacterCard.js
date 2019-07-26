import React from 'react'
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react'


export default function CharacterCard({ ...props }) {

  const { id, species, status, image, name, location, origin } = props.character;

  return (
    <Card className={`character ${id}`}>
      <Image src={image} alt={name} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className='date'>{species} {status}</span>
        </Card.Meta>
        <Card.Description>
          Location: {location.name} <br />
          Origin: {origin.name}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Link to={`/episode/${id}`}>
          <Icon name='user' />
          Episodes
        </Link>
      </Card.Content>
    </Card>
  )
}
