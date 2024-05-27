import React from 'react'
import { Formik,Form,Field } from 'formik'

const Login = () => {
  return (
   <Formik>
   <div className="container">
    <div className="row d-flex justify-content-center my-5">

        <div className="col-md-5">
        <form className='shadow p-3 bg-secondary'>
            <h2 className='text-center fs-1 text-white'>Login</h2>
            <div className="mb-3 form-floating">
                <Field type='email' name='email' id='email' className='form-control' placeholder=''/>
                <label htmlFor="email">Email :</label>
            </div>
            <div className="mb-3 form-floating">
                <Field type='password' name='password' id='password' className='form-control' placeholder=''/>
                <label htmlFor="email">Password :</label>
            </div>

            <div className="mb-3 text-center">
                <button className='btn btn-outline-warning'>Login</button>
               
            </div>

        </form>

        </div>

        

    </div>

   </div>
   
   </Formik>
  )
}

export default Login