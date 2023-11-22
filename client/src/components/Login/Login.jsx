
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Login.module.css'

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

const formInitialState = {
    email: '',
    password: '',
}

export default function Login() {

    const {loginSubmitHandler} = useContext(AuthContext)

    const { formValues, changeHandler, onSubmit, validated } = useForm(formInitialState, loginSubmitHandler);

    return (
        <div className={styles.form}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Form.Label className={styles.header}>Login</Form.Label>
                <Form.Group  >
                    <Form.Label className={styles.label}>Email</Form.Label>
                    <Form.Control className={styles['form-control']}
                        required
                        type="email"
                        name='email'
                        value={formValues.email}
                        onChange={changeHandler}
                    />
                    <Form.Control.Feedback type='invalid'>Valid email is required</Form.Control.Feedback>
                </Form.Group>

                <Form.Group  >
                    <Form.Label className={styles.label}>Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        name='password' 
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                    <Form.Control.Feedback type='invalid'>Password is required</Form.Control.Feedback>
                </Form.Group>


                <Button type="submit" className={styles.btn}>Login</Button>
            </Form>
        </div>
    );
}