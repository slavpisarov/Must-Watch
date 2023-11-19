import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

import styles from './Create.module.css'
import { useState } from 'react';

import useForm from '../../hooks/useForm';

const formInitialState = {
    title: '',
    year: '',
    type: '',
    genre: '',
    notes: '',
    image: '',
}

export default function Create() {
    
    const addMedia = async (values) =>{
        console.log(values);
        // await fetch
    }


    const {formValues,changeHandler, onSubmit} = useForm(formInitialState,addMedia);



    return (
        <div className={styles.createForm}>
            <Form onSubmit={onSubmit}>

                <Form.Label className={styles.header}>Add new Must Watch</Form.Label>
                <Row className="mb-3">
                    <Form.Group controlId="formGridTitle">
                        <Form.Label className={styles.label1}>Title</Form.Label>
                        <Form.Control type="text" placeholder="eg.Aqua man" name='title' value={formValues.title} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label className={styles.label}>Year</Form.Label>
                        <Form.Control placeholder="eg.2018" name='year' value={formValues.year} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label className={styles.label}>Type</Form.Label>
                        <Form.Select name='type' value={formValues.type} onChange={changeHandler}>
                            <option value=''>Choose..</option>
                            <option value='movie'>Movie</option>
                            <option value='tv-series'>TV Series</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGenre">
                        <Form.Label className={styles.label}>Genre</Form.Label>
                        <Form.Control placeholder="eg.Action" name='genre' value={formValues.genre} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className={styles.label}>Notes</Form.Label>
                        <Form.Control placeholder="eg.Actors, description..." name='notes' value={formValues.notes} onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label className={styles.label1}>Image</Form.Label>
                        <Form.Control placeholder="Image URL" name='image' value={formValues.image} onChange={changeHandler}/>
                    </Form.Group>

                </Row>



                <Button variant="primary" type="submit" className={styles.btn}>
                    Add to list
                </Button>
            </Form>
        </div>

    );
}
