import { Form, Formik } from 'formik';
import React from 'react'

import * as Yup from 'yup'

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  
  return (
    <div>
        <h1>Register Formik Page</h1>

        <Formik
        initialValues={
          {
            name: '',
            password1: '',
            password2: '',
            email: '',
          }
        }
        onSubmit={(values)=>{
          console.log(values)
        }}

        validationSchema={
          Yup.object({
            firstName: Yup.string()
                          .min(2, 'Debe tener menos de 2 caracteres')
                          .max(15, 'Debe tener menos de 15 caracteres')
                          .required('Requerido'),

            email: Yup.string()
                      .email('Email incorrecto')
                      .required('Requerido'),

            password1: Yup.string()
                          .min(6, 'Debe tener 6 caracteres o mas')
                          .required('Requerido'),
            
            password2: Yup.string()
                          .oneOf([Yup.ref('password1')], 'Las contraseñas no son iguales')
                          .required('Requerido')
          })
        }
        >
          {
            ({handleReset})=>(
              <Form>
               <MyTextInput label='Name' name='name'/>
               <MyTextInput label='Email' name='email' type='email'/>
               <MyTextInput label='Password' name='password1' type='password'/>
               <MyTextInput label='Repeat Password' name='password2' type='password'/>
               
               <button
            type='submit'
            
            >
                Create
            </button>
            
            <button  onClick={handleReset}    
            >
               Reset Form
            </button>
              </Form>
            )
          }
          
        </Formik>

           
        
    </div>
  )
}

export default RegisterFormikPage

function getFieldProps(arg0: string): JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement> {
  throw new Error('Function not implemented.');
}
