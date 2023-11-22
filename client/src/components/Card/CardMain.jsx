import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './CardMain.module.css'

export default function CardMain({
    title,
    type,
    genre,
    imageUrl
}) {

    return (
        <Card className={styles.card}>
            <Card.Header className={styles.text}>{type === 'movie'?'Movie':'TV Series'}</Card.Header>
            <div className='img-container'>
                <Card.Img variant='top' className={styles.image} src={imageUrl} />
            </div>
            <Card.Body>
                <Card.Title className={styles.title}>{title}</Card.Title>
                <Card.Text className={styles.text}>{genre} </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}
