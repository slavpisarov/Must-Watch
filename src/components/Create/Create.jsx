import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


import styles from './Create.module.css'

export default function Create() {

    const onSubmit = (e) =>{
        e.preventDefault();
        console.log('good');
    }
    return (
        <div className={styles.createForm}>
            <Form onSubmit={onSubmit}>

                <Form.Label className={styles.header}>Add new Must Watch</Form.Label>
                <Row className="mb-3">
                    <Form.Group controlId="formGridTitle">
                        <Form.Label className={styles.label1}>Title</Form.Label>
                        <Form.Control type="text" placeholder="eg.Aqua man" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridYear">
                        <Form.Label className={styles.label}>Year</Form.Label>
                        <Form.Control placeholder="eg.2018" />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridType">
                        <Form.Label className={styles.label}>Type</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Movie</option>
                            <option>TV Series</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridGenre">
                        <Form.Label className={styles.label}>Genre</Form.Label>
                        <Form.Control placeholder="eg.Action" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label className={styles.label}>Notes</Form.Label>
                        <Form.Control placeholder="eg.Actors, description..." />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridImage">
                        <Form.Label className={styles.label1}>Image</Form.Label>
                        <Form.Control placeholder="Image URL" />
                    </Form.Group>

                </Row>



                <Button variant="primary" type="submit" className={styles.btn}>
                    Add to list
                </Button>
            </Form>
        </div>

    );
}
