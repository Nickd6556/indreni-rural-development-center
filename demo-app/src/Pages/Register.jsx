import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  return (
    <Formik
      initialValues={{ fname: '', lname: '', email: '', password: '', cpassword: '' }}
      validationSchema={Yup.object({
        fname: Yup.string()
          .required("First Name Is Mandatory")
          .max(15, 'First Name must have less than or equal to 15 characters'),

        lname: Yup.string()
          .required("Last Name Is Mandatory")
          .max(15, 'Last Name must have less than or equal to 15 characters'),

        email: Yup.string()
          .required("Email Is Mandatory")
          .email("Invalid Email Format"),

        password: Yup.string()
          .required('Password is Mandatory')
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$?_])[a-zA-Z0-9@#$?_]{8,32}$/,
            'Password must be more than 8 characters and must have Uppercase, Lowercase, a Special Character, and a number'
          ),

        cpassword: Yup.string()
          .oneOf([Yup.ref('password')], 'Password must be the same')
      })}
    >
      <div className="container">
        <div className="row d-flex justify-content-center my-5">
          <div className="col-md-5 shadow p-3">
            <Form>
              <h1 className='text-primary text-center'>Register Form</h1>
              <div className="mb-3">
                <label htmlFor="fname">First Name :</label>
                <Field type='text' name='fname' className='form-control' />
                <ErrorMessage name='fname'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="lname">Last Name :</label>
                <Field type='text' name='lname' className='form-control' />
                <ErrorMessage name='lname'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="email">Email :</label>
                <Field type='email' name='email' className='form-control' />
                <ErrorMessage name='email'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="password">Password :</label>
                <Field type='password' name='password' className='form-control' />
                <ErrorMessage name='password'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-3">
                <label htmlFor="cpassword">Confirm Password :</label>
                <Field type='password' name='cpassword' className='form-control' />
                <ErrorMessage name='cpassword'>
                  {msg => <div style={{ color: 'red' }}>{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="mb-2">
                <button className='btn btn-outline-info'>Register</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Register;
