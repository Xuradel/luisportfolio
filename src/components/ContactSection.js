import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select,
    Textarea,
} from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

const resultText = () => { 
    return(
        <>
        <p id="msg-success">Thank you, You will be contacted soon!</p>
        </>
    )
}


const ContactSection = () => {

    const { isLoading, response, submit } = useSubmit();
    const { onOpen } = useAlertContext();
    const [result,showResult] = useState(false);

    function sendEmail(object) {
        emailjs.send("service_nsbms3q", "template_ut2l2ug", object, "ohG4PmJ3kGUbs2jV6")
            .then((result) => {
                console.log(result.text)
            }, (error) => {
                console.log(error.text)
            })
            showResult(true);
    }

    const formik = useFormik({
        initialValues: {
            firstName: "",
            email: "",
            type: "",
            comment: "",
        },
        onSubmit: (values, actions) => {
            setTimeout(() => {
                sendEmail(values)
                actions.setSubmitting(false)
            }, 1000)
            submit('', values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("Required"),
            email: Yup.string().email("Invalid email address").required("Required"),
            type: Yup.string().required("Required"),
            comment: Yup.string()
                .min(25, "Must be at least 25 characters")
                .required("Required"),
        }),
    });

    useEffect(() => {
        if (response) {
            onOpen(response.type, response.message);
            if (response.type === 'success') {
                formik.resetForm();
            }
        }
    }, [response]);

    return (
        <div id="contact-section" className="formContainer">
            <h1 className="contactTitle">Contact <span className="gold">me</span></h1>
            <form className="form" onSubmit={formik.handleSubmit} >
                <FormControl isInvalid={!!formik.errors.firstName && formik.touched.firstName}>
                    <FormLabel htmlFor="firstName">Name</FormLabel>
                    <div className="inpt">
                        <Input
                            id="firstName"
                            name="firstName"
                            {...formik.getFieldProps("firstName")}
                        />
                    </div>
                    <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.email && formik.touched.email}>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <div className="inpt">
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            {...formik.getFieldProps("email")}
                        />
                    </div>
                    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.type && formik.touched.type}>
                    <FormLabel htmlFor="type">Subject</FormLabel>
                    <div className="inpt">
                    <Input
                            id="type"
                            name="type"
                            {...formik.getFieldProps("type")}
                        />
                    </div>
                </FormControl>
                <FormControl isInvalid={!!formik.errors.comment && formik.touched.comment}>
                    <FormLabel htmlFor="comment">Your message</FormLabel>
                    <div className="inpt">
                        <Textarea
                            id="comment"
                            name="comment"
                            height={250}
                            {...formik.getFieldProps("comment")}
                        />
                    </div>
                    <FormErrorMessage>{formik.errors.comment}</FormErrorMessage>
                </FormControl>
                <Button className="contact-btn" type="submit" colorScheme="blue" isLoading={isLoading}>
                    <p className="test">
                        Submit
                    </p>
                </Button>
                <div className="results">
                    {result && <p>{resultText()}</p>}
                    {/* <script>
                        {setTimeout(function(){
                            
                            var msg = document.getElementById("msg-success");
                            if(msg){
                            msg.parentNode.removeChild(msg);
                            }
                        }, 18000)}
                    </script> */}
                </div>
            </form>
        </div>
    )
}


export default ContactSection;