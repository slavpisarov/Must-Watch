import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styles from './Edit.module.css'
import useForm from '../../hooks/useForm';
import * as mediaService from '../../services/mediaService'
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const formInitialState = {
    title: '',
    year: '',
    type: '',
    genre: '',
    notes: '',
    image: '',
}

export default function Create() {

    const { mediaId } = useParams()
    const navigate = useNavigate()
    const [media,setMedia] = useState(formInitialState)
    const [validated, setValidated] = useState(false);

    useEffect(()=>{
        mediaService.getOne(mediaId)
        .then(setMedia)
    },[])

    const changeHandler = (e) =>{
        setMedia(state =>({
            ...state,
            [e.target.name]:e.target.value,
        }))
    }

    const editGameSubmit = async (e) =>{
        e.preventDefault()

        if(e.currentTarget.checkValidity() === false){
            return setValidated(true)
        }

        const data = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await mediaService.edit(mediaId, data);
            navigate('/')

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className={styles.createForm}>
            <Form noValidate validated={validated} onSubmit={editGameSubmit}>

                <Form.Label className={styles.header}>Edit Page</Form.Label>
                <Row className="mb-3">
                    <Form.Group controlId="formGridTitle">
                        <Form.Label className={styles.label1}>Title</Form.Label>
                        <Form.Control
                           required
                            type="text"
                            placeholder="eg.Aqua man"
                            name='title'
                            value={media.title}
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
                            value={media.year}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label className={styles.label}>Type</Form.Label>
                        <Form.Select required name='type' value={media.type} onChange={changeHandler}>
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
                            value={media.genre}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className={styles.label}>Notes</Form.Label>
                        <Form.Control
                            placeholder="eg.Actors, description..."
                            name='notes'
                            value={media.notes}
                            onChange={changeHandler} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label className={styles.label1}>Image</Form.Label>
                        <Form.Control
                            placeholder="Image URL"
                            name='image'
                            value={media.image}
                            onChange={changeHandler} />
                    </Form.Group>

                </Row>



                <Button variant="primary" type="submit" className={styles.btn}>
                    Apply
                </Button>
            </Form>
        </div>

    );
}
