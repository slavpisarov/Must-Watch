
import { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import styles from './Register.module.css'

import useForm from '../../hooks/useForm';
import AuthContext from '../../contexts/AuthContext';

const formInitialState = {
    username:'',
    email: '',
    password: '',
    rePassword: '',
}

export default function Register() {
    const {registerSubmitHandler, registerErr} = useContext(AuthContext)

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
                    <Form.Control.Feedback type='invalid'>Choose a username</Form.Control.Feedback>
                </Form.Group>

                <Form.Group  >
                    <Form.Label className={styles.label}>Email</Form.Label>
                    <Form.Control className={styles['form-control']}
                        required
                        type="email"
                        name='email'
                        value={formValues.email}
                        onChange={changeHandler}
                        isInvalid={registerErr}
                    />
                    <Form.Control.Feedback type='invalid'>{registerErr ? 'User with this email already exists': 'Valid email is required' }</Form.Control.Feedback>
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
                    <Form.Control.Feedback type='invalid'>{formValues.rePassword ==='' ? 'Repeat password is required': 'Passwords do not match'}</Form.Control.Feedback>
                </Form.Group>


                <Button type="submit" className={styles.btn}>Register</Button>
            </Form>
        </div>
    );
}
