import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './CardHome.module.css'

export default function CardHome({
    title,
    year,
    type,
    genre,
    // notes,
    imageUrl
}) {

    console.log('good');
    return (
        <Card className={styles.card}>
            <Card.Header>{type}</Card.Header>
            <div className='img-container'>
                <Card.Img variant='top' className={styles.image} src={imageUrl} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{year}</Card.Text>
                <Card.Text>{genre} </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}
