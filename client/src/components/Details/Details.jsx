import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as mediaService from '../../services/mediaService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import styles from './Details.module.css'

export default function Details() {
    // const { email,userId } = useContext(AuthContext)
    const navigate = useNavigate()
    const [media, setMedia] = useState([])
    const { mediaId } = useParams();


    useEffect(() => {
        mediaService.getOne(mediaId)
            .then(setMedia)
    }, [mediaId])


    const deleteMedia = async () =>{

        const hasConfirmed = confirm(`Are you sure yu want to delete ${media.title} from ${media.year}`);
        if(hasConfirmed){
            await mediaService.remove(mediaId)

            navigate('/')
        }
    }

    return (

        <div className={styles.home}>
            <div className={styles.head}>
                <h1>Details page</h1>
            </div>
            <Card className={styles.card}>
                {/* <Card.Header className={styles.text}>{media.type === 'movie' ? 'Movie' : 'TV Series'}</Card.Header> */}
                <div className='img-container'>
                    <Card.Img variant='top' className={styles.image} src={media.image} />
                </div>
                <Card.Body>
                    <Card.Title className={styles.title}>{media.title} {` ( ${media.year} )`}</Card.Title>
                    <Card.Text className={styles.text}>Type: {media.type === 'movie' ? 'Movie' : 'TV Series'}</Card.Text>
                    <Card.Text className={styles.text}>Genre: {media.genre} </Card.Text>
                    <Card.Text className={styles.text}>Notes: {media.notes} </Card.Text>
                    <Button className={styles.btns} variant="primary">Edit</Button>
                    <Button  onClick={deleteMedia} className={styles.btns} variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        </div>

    );
}
