import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './Details.module.css'

export default function Details({
    title,
    type,
    genre,
    image
}) {
// const { email,userId } = useContext(AuthContext)
const [game, setGame] = useState([])
const { mediaId } = useParams();


useEffect(() => {

console.log(mediaId);

    // gameService.getOne(mediaId)
    //     .then(setGame)
}, [mediaId])


    return (
        <Card className={styles.card}>
            <Card.Header className={styles.text}>{type === 'movie'?'Movie':'TV Series'}</Card.Header>
            <div className='img-container'>
                <Card.Img variant='top' className={styles.image} src={image} />
            </div>
            <Card.Body>
                <Card.Title className={styles.title}>{title}</Card.Title>
                <Card.Text className={styles.text}>{genre} </Card.Text>
                <Button variant="primary">Details</Button>
            </Card.Body>
        </Card>
    );
}
