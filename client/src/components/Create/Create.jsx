import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styles from './Create.module.css'
import useForm from '../../hooks/useForm';
import * as mediaService from '../../services/mediaService'
import { useNavigate } from 'react-router-dom';

const formInitialState = {
    title: '',
    year: '',
    type: '',
    genre: '',
    notes: '',
    image: '',
}

export default function Create() {

    const navigate = useNavigate()

    const addMedia = async (mediaData) => {
        try {
            await mediaService.create({...mediaData,commentsCount:0})
            navigate(mediaData.type === 'movie' ? '/catalog/movies' : '/catalog/tv-series')
        } catch (err) {
            alert(err.message)
            navigate('/')
        }

    }

    const { formValues, changeHandler, onSubmit, validated } = useForm(formInitialState, addMedia);

    return (
        <div className={styles.createForm}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>

                <Form.Label className={styles.header}>Add new Must Watch</Form.Label>
                <Row className="mb-3">
                    <Form.Group controlId="formGridTitle">
                        <Form.Label className={styles.label1}>Title</Form.Label>
                        <Form.Control
                           required
                            type="text"
                            placeholder="eg.Aqua man"
                            name='title'
                            value={formValues.title}
                            onChange={changeHandler} />
                    <Form.Control.Feedback type='invalid'>Title is required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label className={styles.label}>Year</Form.Label>
                        <Form.Control
                            placeholder="eg.2018"
                            type='number'
                            min={1900}
                            max={2030}
                            name='year'
                            value={formValues.year}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label className={styles.label}>Type</Form.Label>
                        <Form.Select required name='type' value={formValues.type} onChange={changeHandler}>
                            <option value=''>Choose..</option>
                            <option value='movie'>Movie</option>
                            <option value='tv-series'>TV Series</option>
                        </Form.Select>
                        <Form.Control.Feedback type='invalid'>Type is required</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGenre">
                        <Form.Label className={styles.label}>Genre</Form.Label>
                        <Form.Control
                            placeholder="eg.Action"
                            name='genre'
                            value={formValues.genre}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className={styles.label}>Notes</Form.Label>
                        <Form.Control
                            placeholder="eg.Actors, description..."
                            name='notes'
                            value={formValues.notes}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label className={styles.label1}>Image</Form.Label>
                        <Form.Control
                            placeholder="Image URL"
                            name='image'
                            value={formValues.image}
                            onChange={changeHandler} />
                    </Form.Group>

                </Row>



                <Button variant="primary" type="submit" className={styles.btn}>
                    Add to list
                </Button>
            </Form>
        </div>

    );
}
