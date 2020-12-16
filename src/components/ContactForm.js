import React from 'react'
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function ContactForm() {
    const schema = yup.object().shape({

        name: yup
            .string()
            .required("Your full name is required")
            .min(5, "Name must contain at least 5 characters"),

        email: yup
            .string()
            .email('Invalid email')
            .required("Email is required"),

        message: yup
            .string()
            .required("Message is required")
            .min(10, "Your message must contain at least 10 characters")
    });

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });

    function onSubmit(data) {
        console.log("data", data)
            .then(() => {
                alert("Thank you for your enquiry. We will get back to you shortly.")
            })
    }

    return (
        <div>
            <Form /*noValidate*/ onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Name" name="name" ref={register} />
                    {errors.name && <p>{errors.name.message}</p>}

                    <br />
                    <Form.Control type="text" placeholder="Email" name="email" ref={register} />
                    {errors.email && <p>{errors.email.message}</p>}

                    <br />
                    <Form.Control type="text" placeholder="Message" name="message" ref={register} />
                    {errors.message && <p>{errors.message.message}</p>}

                    <br />
                    <Button type="submit" variant="primary">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default ContactForm;