import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import "./ReservationForm.css";
import * as Yup from 'yup';
import { createRoutesFromChildren } from 'react-router-dom';

function ReservationForm() {
    return(
        <Formik
            initialValues={{
                partySize: '',
                date: '',
                firstName: '',
                lastName: '',
                email: ''
            }}
            validationSchema={Yup.object({
                partySize: Yup.string()
                    .required('Please select your Party Size'),
                occasion: Yup.string()
                    .required('Please select your Occasion'),
                firstName: Yup.string()
                    .required('Please enter your First Name'),
                lastName: Yup.string()
                    .required('Please enter your Last Name'),
                email: Yup.string()
                    .email('Invalid email address')
                    .required('Please enter your Email Address'),
            })}
            onSubmit={(values, {setSubmitting}) =>{
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400)
            }}
        >
            <Form>
                <h1>Table Reservations</h1>

                <Field name="partySize" as="select" className="partySize">
                    <option value="" disabled selected>Select your Party Size</option>
                    <option value ="1">1</option>
                    <option value ="2">2</option>
                    <option value ="3">3</option>
                    <option value ="4">4</option>
                    <option value ="5">5</option>
                    <option value ="6">6</option>
                    <option value ="7">7</option>
                    <option value ="8">8</option>
                    <option value ="9">9</option>
                    <option value ="10">10</option>
                </Field>
                <br/>
                <ErrorMessage name="partySize" />
                <br/>
                <Field name="date" as="date" className="date" />
                <br/>
                <Field name="time" as="time" className="time" />
                <br/>
                <Field name="occasion" as="select" className="occasion">
                    <option value="" disabled selected>Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Engagement">Engagement</option>
                </Field>
                <br/>
                <ErrorMessage name="occasion" />
                <br/>
                <Field name="firstName" type="text" placeholder="First Name"/>
                <br/>
                <ErrorMessage name="firstName" />
                <br/>
                <Field name="lastName" type="text" placeholder="Last Name"/>
                <br/>
                <ErrorMessage name="lastName" />
                <br/>
                <Field name="email" type="email" placeholder="Email Address"/>
                <br/>
                <ErrorMessage name="email" />
                <br/>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default ReservationForm;