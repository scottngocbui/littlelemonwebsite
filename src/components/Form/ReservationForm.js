import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import "./ReservationForm.css";
import * as Yup from 'yup';
import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

function ReservationForm() {
    const [startDate, setStartDate] = useState(new Date());
    const [time, setTime] = useState('');

    return(
        <Formik
            initialValues={{
                partySize: '',
                reservationDate: new Date(),
                time: '',
                occasion: '',
                firstName: '',
                lastName: '',
                email: ''
            }}
            validationSchema={Yup.object({
                partySize: Yup.string()
                    .required('Please select your Party Size'),
                time: Yup.string()
                    .required('Please select your Reservation Time'),
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
                <img src={require('../../assets/restaurant.jpg')} className="reservation-picture"/>
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
                <ReactDatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                <br/>
                <Field name="time" as="select" className="time">
                    <option value="" disabled selected>Select your Reservation Time</option>
                    <option value ="3:00PM">3:00PM</option>
                    <option value ="3:30PM">3:30PM</option>
                    <option value ="4:00PM">4:00PM</option>
                    <option value ="4:30PM">4:30PM</option>
                    <option value ="5:00PM">5:00PM</option>
                    <option value ="5:30PM">5:30PM</option>
                    <option value ="6:00PM">6:00PM</option>
                    <option value ="6:30PM">6:30PM</option>
                    <option value ="7:00PM">7:00PM</option>
                    <option value ="7:30PM">7:30PM</option>
                </Field>
                <br/>
                <ErrorMessage name="time" />
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