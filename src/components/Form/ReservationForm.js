import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import "./ReservationForm.css";
import * as Yup from 'yup';
import { createRoutesFromChildren } from 'react-router-dom';

function ReservationForm() {
    return(
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: ''
            }}
            validationSchema={Yup.object({
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
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <h1>Table Reservations</h1>
                    <select>
                        <option value="" disabled selected>Select your Party Size</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                    <br />

                    <input
                        id="date"
                        name="date"
                        type="date"
                        placeholder='Date'
                    />
                    <br />

                    <input
                        id="time"
                        name="time"
                        type="time"
                    />
                    <br />

                    <select>
                        <option value="" disabled selected>Occasion</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                    </select>
                    <br />

                    <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder='First Name'
                        {...formik.getFieldProps('firstName')}
                    />
                    {formik.touched.firstName && formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
                    <br />

                    <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder='Last Name'
                        {...formik.getFieldProps('lastName')}
                    />
                    {formik.touched.lastName && formik.errors.lastName ? <div>{formik.errors.lastName}</div> : null}
                    <br />

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email Address'
                        {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    <br />

                    <button type="submit">Submit</button>

                </form>
            )}
        </Formik>
    );
};

export default ReservationForm;