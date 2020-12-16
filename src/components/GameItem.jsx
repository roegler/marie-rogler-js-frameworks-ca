import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GameItem({ id, name, background_image, rating, released }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={background_image} height="150" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <p>Rating: {rating}</p>
                    <p>Released: {released}</p>
                </Card.Text>
                <Button variant="primary" href={'/game/' + id}>Read more</Button>
            </Card.Body>
        </Card>

    )
}

export default GameItem;