import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const schema = yup.object().shape({
    firstName: yup
        .string()
        .required("First name is required")
        .min(2, "Your first name must contain at least 2 characters"),

    lastName: yup
        .string()
        .required("Last name is required")
        .min(2, "Your first name must contain at least 2 characters"),

    email: yup
        .string()
        .email('Invalid email')
        .required("Email is required"),

    message: yup
        .string()
        .required("Message is required")
        .min(10, "Your message must contain at least 10 characters")
});

function ContactForm() {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data);
    }

    return (
        <div>
            <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control type="text" placeholder="First name" ref={register} />
                    {errors.firstName && <p>{errors.firstName.message}</p>}

                    <br />
                    <Form.Control type="text" placeholder="Last name" ref={register} />
                    {errors.lastName && <p>{errors.lastName.message}</p>}

                    <br />
                    <Form.Control type="text" placeholder="Email" ref={register} />
                    {errors.email && <p>{errors.email.message}</p>}

                    <br />
                    <Form.Control type="text" placeholder="Message" ref={register} />
                    {errors.message && <p>{errors.message.message}</p>}

                    <br />
                    <Button type="submit" variant="primary">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default ContactForm;