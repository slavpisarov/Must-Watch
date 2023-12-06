import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'

import * as mediaService from '../../services/mediaService'
import * as commentService from '../../services/commentService'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

import styles from './Details.module.css'
import AuthContext from '../../contexts/AuthContext';
import useForm from '../../hooks/useForm';


export default function Details() {
    const { userId, isAuthenticated, username } = useContext(AuthContext)
    const navigate = useNavigate()
    const [media, setMedia] = useState([])
    const [comments, setComments] = useState([])
    const { mediaId } = useParams();

    useEffect(() => {
        mediaService.getOne(mediaId)
            .then(setMedia)
            .catch((e) => alert(e.message))

        commentService.getAll(mediaId)
            .then(setComments)
            .catch((e) => alert(e.message))

    }, [mediaId])

    const addCommentHandler = async ({ comment }) => {
        try {
            const newComment = await commentService.create(mediaId, comment, username)
            await mediaService.addComment(mediaId)

            setComments(state => [...state, { ...newComment }])
            formValues.comment = '';

        } catch (err) {
            alert(err.message)
        }
    }

    const deleteMedia = async () => {

        const hasConfirmed = confirm(`Are you sure you want to delete ${media.title} from your ${media.type === 'movie' ? 'Movie' : 'TV Series'} list?`);
        if (hasConfirmed) {
            try {
                await mediaService.remove(mediaId)
                navigate('/')

            } catch (err) {
                alert(err.message)
                navigate('/')

            }

        }
    }

    let formInitialState = { comment: '' }
    const { formValues, changeHandler, onSubmit, validated } = useForm(formInitialState, addCommentHandler);

    return (
        <>
            <div className={styles.details}>
                <div className={styles.head}>
                    <h1>Details page</h1>
                </div>
                <Card className={styles.card}>
                    <div className='img-container'>
                        {media.image !== '' && (<Card.Img variant='top' className={styles.image} src={media.image} />)}
                    </div>
                    <Card.Body>
                        <Card.Text className={styles.text}>{media.type === 'movie' ? 'Movie' : 'TV Series'}</Card.Text>
                        <Card.Title className={styles.title}>{media.title}</Card.Title>
                        {media.year !== '' && (<Card.Text className={styles.text}>Year: {media.year} </Card.Text>)}
                        {media.genre !== '' && (<Card.Text className={styles.text}>Genre: {media.genre} </Card.Text>)}
                        {media.notes !== '' && (<Card.Text className={styles.text}>Notes: {media.notes} </Card.Text>)}
                        {userId === media._ownerId && (
                            <>
                                <Button as={Link} to={`/media/${media._id}/edit`} className={styles.btns} variant="primary">Edit</Button>
                                <Button onClick={deleteMedia} className={styles.btns} variant="danger">Delete</Button>
                            </>
                        )}
                    </Card.Body>
                </Card>


            </div>
            {comments.length && (
                <div className={styles.commentSection}>
                    <h5 className={styles.heading}>Comments:</h5>
                    <ul className={styles.commentList}>
                        {comments.map(comment => (
                            <li key={comment._id}>
                                <p>{comment.owner}: {comment.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {isAuthenticated && (
                <Form noValidate validated={validated} onSubmit={onSubmit} className={styles.form}>
                    <Form.Label className={styles.headComment}>Add New Comment</Form.Label>
                    <Form.Group  >
                        <Form.Control className={styles.add}
                            required
                            placeholder='Comment..'
                            type="text"
                            name='comment'
                            value={formValues.comment}
                            onChange={changeHandler}
                        />
                        <Form.Control.Feedback type='invalid'>Cannot send empty comment</Form.Control.Feedback>
                    </Form.Group>
                    <Button type="submit" className={styles.btn}>Add Comment</Button>
                </Form>
            )}
        </>
    );
}
