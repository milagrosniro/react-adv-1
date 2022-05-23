import React from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

interface IFormValues{
    firstName: string,
    lastName: string,
    email: string
}

const FormikYupPage = () => {

   
//useFormik se tiene que inicializar como u objeto
    const {handleChange, handleSubmit, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        //onSubmit se ejecuta cuando el formulario cumpla con todos los requisitos
        onSubmit: (values) =>{
            console.log(values)
        },
        //esta propiedad arma un esquema de validacion, para eso se usa Yup que sirve para hacer validaciones faciles
       validationSchema: Yup.object({
        firstName: Yup.string()
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
        lastName: Yup.string()
                    .max(15, 'Debe tener 15 caracteres o menos')
                    .required('Requerido'),
        email: Yup.string()
                    .email('Email incorrecto')
                    .required('Requerido')
       })
    });
  return (
    <div>
        <h1>Formik Yup</h1>
        <form noValidate
        onSubmit={handleSubmit}
        
        >
            <label htmlFor='firstName'>First Name</label>
            <input type='text'
            name='firstName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}>
            </input>

            {touched.firstName && errors.firstName &&
                <span>{errors.firstName}</span>}

            <label htmlFor='lastName'>Last Name</label>
            <input type='text'
            name='lastName'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
            >
            </input>

            { touched.lastName && errors.lastName &&
                <span>{errors.lastName}</span>}

            <label htmlFor='email'>Email Adress</label>
            <input type='email'
            name='email'
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            >
            </input>
            {touched.email && errors.email &&
                <span>{errors.email}</span>}
            

            <button
            type='submit'>
                Submit
            </button>

        </form>
    </div>
  )
}

export default FormikYupPage