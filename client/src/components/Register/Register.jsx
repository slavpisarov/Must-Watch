
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/authContext';

const formInitialState = {
    username:'',
    email: '',
    password: '',
    rePassword: '',
}

export default function Login() {

    const {registerSubmitHandler} = useContext(AuthContext)

    const { formValues, changeHandler, onSubmit, validated, errors } = useForm(formInitialState, registerSubmitHandler);

    return (
        <div className={styles.form}>
            <Form noValidate validated={validated} onSubmit={onSubmit}>
                <Form.Label className={styles.header}>Register</Form.Label>
                <Form.Group  >
                    <Form.Label className={styles.label}>Username</Form.Label>
                    <Form.Control className={styles['form-control']}
                        required
                        type="text"
                        name='username'
                        value={formValues.username}
                        onChange={changeHandler}
                    />
                    <Form.Control.Feedback type='invalid'>Choose an username</Form.Control.Feedback>
                </Form.Group>

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

                <Form.Group >
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

                <Form.Group >
                    <Form.Label className={styles.label}>Repeat Password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        name='rePassword' 
                        value={formValues.rePassword}
                        onChange={changeHandler}
                        isInvalid={errors.passwordMismatch}
                    />
                    <Form.Control.Feedback type='invalid'>Passwords don't match</Form.Control.Feedback>
                </Form.Group>


                <Button type="submit" className={styles.btn}>Register</Button>
            </Form>
        </div>
    );
}
